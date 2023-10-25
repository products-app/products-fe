import { Suspense, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm'
import { useCheckout } from '../hooks'
import { toast } from 'react-toastify'

const confiPK = process.env.NEXT_PUBLIC_STRIPE_SK || ''

const stripePromise = loadStripe(confiPK)

const Checkout = () => {
  const { user, cartItems, totalCart, errorCheckout } = useCheckout()

  useEffect(() => {
    if (errorCheckout) {
      toast.error(errorCheckout, {
        theme: 'dark',
      })
    }
  }, [errorCheckout])

  const options = {
    mode: 'payment',
    amount: totalCart * 100,
    currency: 'brl',
    appearance: {},
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <Suspense fallback={<div>oii</div>}>
        <CheckoutForm user={user} cartItems={cartItems} totalCart={totalCart} />
      </Suspense>
    </Elements>
  )
}

export default Checkout
