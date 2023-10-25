import { useEffect } from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import { useCheckoutForm } from '../hooks'
import { HeadingContainer, OrderText, OrderButton } from './styles'
import { formatDecimalToReal } from '@/helpers/products'

const CheckoutForm: React.FC<app.ICheckoutForm> = ({
  user,
  cartItems,
  totalCart,
}) => {
  const { handleSubmit, errorMessage, stripe, elements } = useCheckoutForm(
    user,
    cartItems,
    totalCart,
  )

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        theme: 'dark',
      })
    }
  }, [errorMessage])

  return (
    <form onSubmit={handleSubmit}>
      <HeadingContainer size="md">Finalizar a compra</HeadingContainer>
      <OrderText size="lg">
        Total do pedido: <strong>{formatDecimalToReal(totalCart)}</strong>
      </OrderText>
      <PaymentElement />
      <OrderButton type="submit" disabled={!stripe || !elements}>
        Finalizar pedido
      </OrderButton>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}

export default CheckoutForm
