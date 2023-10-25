import { useState, useEffect } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { getTotal, cartToOrderItems } from '@/helpers/cart'
import { formatDecimalToReal } from '@/helpers/products'
import { postOrder } from '@/api/order'
import { useStore } from '@/stores'

interface IOrderResponse {
  err_msg: string | undefined
  order: app.ICreateOrderResponse | undefined
}

interface ICreateOrder {
  cartItems: app.CartItem[] | undefined
  totalCart: number
  userID: number | undefined
  userToken: string | undefined
}

const createOrder = async ({
  cartItems,
  totalCart,
  userID,
  userToken,
}: ICreateOrder): Promise<IOrderResponse> => {
  const orderResponse: IOrderResponse = {
    err_msg: undefined,
    order: undefined,
  }
  if (!cartItems) return orderResponse

  const orderProducts = cartToOrderItems(cartItems)
  if (!orderProducts) {
    orderResponse.err_msg = 'Erro: Carrinho de compras vazio'

    return orderResponse
  }

  const order = {
    items: orderProducts,
    user_id: userID || 0,
    total: totalCart,
  }

  await postOrder(order, userToken)
    .then((res) => {
      orderResponse.order = res?.data
    })
    .catch((e) => {
      let err = 'Ocorreu um erro no processamento do pedido'
      if (e.data) err = [err, e.data].join(': ')

      orderResponse.err_msg = err
    })

  return orderResponse
}

const useCheckoutForm = (
  user: app.UserAuth | undefined,
  cartItems: app.CartItem[] | undefined,
  totalCart: number,
) => {
  const { resetCart } = useStore((state) => ({
    userID: state.user?.id,
    userToken: state.user?.token,
    cartItems: state.items,
    resetCart: state.resetCart,
  }))

  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  )

  const checkReturnError = (data: IOrderResponse | undefined) => {
    switch (true) {
      case data === undefined:
        setErrorMessage('Erro no processamento. Tente novamente mais tarde!')
        break
      case data?.err_msg !== undefined:
        setErrorMessage(data?.err_msg)
        break
      case data?.order === undefined:
        setErrorMessage('O pedido não foi gerado. Tente novamente mais tarde!')
        break
    }

    return data?.order
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (elements == null) return

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message)
      return
    }

    const res = await createOrder({
      cartItems,
      totalCart,
      userID: user?.id || 0,
      userToken: user?.token || '',
    })

    const orderResponse = checkReturnError(res)
    if (!orderResponse) return

    await stripe?.confirmPayment({
      elements,
      clientSecret: orderResponse.client_secret,
      confirmParams: {
        return_url: 'http://localhost:3000/user/orders',
      },
    })

    resetCart()
  }

  return {
    handleSubmit,
    errorMessage,
    totalCartCurrency: formatDecimalToReal(totalCart),
    stripe,
    elements,
  }
}

const useCheckout = () => {
  const fallbackTotalCart: number = 200
  const { user, cartItems } = useStore((state) => ({
    user: state.user,
    cartItems: state.items,
  }))
  const [totalCart, setTotalCart] = useState(fallbackTotalCart)
  const [errorCheckout, setErrorCheckout] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    if (!cartItems) return
    const [errMsg, totalCart] = getTotal(cartItems)

    if (errMsg) {
      setErrorCheckout(errMsg)
      return
    }

    setTotalCart(totalCart)
  }, [cartItems])

  return {
    user,
    cartItems,
    totalCart,
    errorCheckout,
  }
}

export { useCheckout, useCheckoutForm }
