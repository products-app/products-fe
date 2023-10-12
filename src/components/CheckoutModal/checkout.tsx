import { useState, useEffect, useSyncExternalStore } from 'react'
import { useCartStore } from '@/root/src/store/cart'
import { loadStripe } from '@stripe/stripe-js'
import { Button, Heading, Text } from '@lebernardo/react'
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
import { useUserStore } from '@/root/src/store/user'
import config from '@/root/config'

const CheckoutForm = () => {
  const cart = useSyncExternalStore(
    useCartStore.subscribe,
    useCartStore.getState,
  )

  const userID = useUserStore((state) => state.userID)
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  )
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    const [errMsg, totalCart] = getTotal(cart.cartItems)

    if (errMsg) {
      setErrorMessage(errMsg)
      toast.error(errMsg, {
        theme: 'dark',
      })
      return
    }
    setTotalCart(totalCart)
  }, [cart])

  const handleCreateOrder = async () => {
    const orderProducts = cartToOrderItems(cart.cartItems)
    if (!orderProducts) {
      setErrorMessage('the cart is empty')
      toast.error('the cart is empty', {
        theme: 'dark',
      })
      return
    }
    const order = {
      items: orderProducts,
      user_id: userID,
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
        toast.error('não foi possível efetuar a compra', {
          theme: 'dark',
        })
      })

    if (!orderReturned) return
    await stripe?.confirmPayment({
      elements,
      clientSecret: orderReturned.client_secret,
      confirmParams: {
        return_url: '/user/orders',
      },
    })

    cart.truncateItems()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Heading className="text-gray900 mb-3" size="md">
        Finalizar a compra
      </Heading>
      <Text
        className="text-gray600 pb-4 mb-4 border-b-2 border-solid border-gray400"
        size="lg"
      >
        Total do pedido: <strong>{formatDecimalToReal(totalCart)}</strong>
      </Text>
      <PaymentElement />
      <Button
        className="bg-base500 p-2 mt-8 w-full"
        type="submit"
        disabled={!stripe || !elements}
      >
        Finalizar pedido
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}

const stripePromise = loadStripe(config.stripeSK)

const Checkout = () => {
  const cart = useSyncExternalStore(
    useCartStore.subscribe,
    useCartStore.getState,
  )
  const [totalCart, setTotalCart] = useState(200)
  useEffect(() => {
    const [errMsg, totalCart] = getTotal(cart.cartItems)

    if (errMsg) {
      toast.error(errMsg, {
        theme: 'dark',
      })
      return
    }
    setTotalCart(totalCart)
  }, [cart])

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
