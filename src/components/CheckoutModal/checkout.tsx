import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cart'
import { loadStripe } from '@stripe/stripe-js'
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { getTotal, cartToOrderItems } from '@/helpers/cart'
import { formatDecimalToReal } from '@/helpers/products'
import { toast } from 'react-toastify'
import { postOrder } from '@/api/order'
import { useUserStore } from '@/store/user'
import { HeadingContainer, OrderText, OrderButton } from './styles'
import useFromStore from "@/hooks/store"

const confiPK = "pk_test_51O06hDJTVjoQ9SZlF0vxhAybkAKmQEt6ngo5cK1gZKCiajMHtXTD7HbjTtfQFRCaz9Tv3h3DZrN1jE9C3SACPNFx00SGuy0ucH"

const CheckoutForm = () => {
  const userID = useFromStore(useUserStore, state => state.userID)
  const cartItems = useCartStore((state) => state.cartItems)
  const truncateItems = useCartStore((state) => state.truncateItems)
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  )
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    console.log(userID)
    if (!cartItems) return
    const [errMsg, totalCart] = getTotal(cartItems)

    if (errMsg) {
      setErrorMessage(errMsg)
      toast.error(errMsg, {
        theme: 'dark',
      })
      return
    }
    setTotalCart(totalCart)
  }, [cartItems])

  const handleCreateOrder = async () => {
    if (!cartItems) return
    const orderProducts = cartToOrderItems(cartItems)
    if (!orderProducts) {
      setErrorMessage('the cart is empty')
      // toast.error('the cart is empty', {
      //   theme: 'dark',
      // })
      return
    }
    const order = {
      items: orderProducts,
      user_id: userID || 0,
      total: totalCart,
    }

    return postOrder(order)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message)
      return
    }

    let orderReturned
    await handleCreateOrder()
      .then((res) => {
        orderReturned = res?.data
      })
      .catch((e) => {
        console.log(e)
        // toast.error('não foi possível efetuar a compra', {
        //   theme: 'dark',
        // })
      })

    if (!orderReturned) return
    await stripe?.confirmPayment({
      elements,
      clientSecret: orderReturned.client_secret,
      confirmParams: {
        return_url: 'http://localhost:3000/user/orders',
      },
    })

    truncateItems()
  }

  return (
    <form onSubmit={handleSubmit}>
      <HeadingContainer size="md">
        Finalizar a compra
      </HeadingContainer>
      <OrderText size="lg">
        Total do pedido: <strong>{formatDecimalToReal(totalCart)}</strong>
      </OrderText>
      <PaymentElement />
      <OrderButton
        type="submit"
        disabled={!stripe || !elements}
      >
        Finalizar pedido
      </OrderButton>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}

const stripePromise = loadStripe(confiPK)

const Checkout = () => {
  const cart = useFromStore(useCartStore, state => state)
  const [totalCart, setTotalCart] = useState(200)
  useEffect(() => {
    if (cart?.cartItems) return
    const [errMsg, totalCart] = getTotal(cart?.cartItems)

    if (errMsg) {
      // toast.error(errMsg, {
      //   theme: 'dark',
      // })
      return
    }
    setTotalCart(totalCart)
  }, [])

  const options = {
    mode: 'payment',
    amount: totalCart * 100,
    currency: 'brl',
    appearance: {},
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout