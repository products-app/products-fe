import Header from '@/components/common/Header'
import { CartSidebar } from '@/components/Cart'
import CheckoutModal from '@/components/Checkout/CheckoutModal'
import { ToastContainer } from 'react-toastify'
import { Container } from './styles'

type PageProps = {
  children?: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <CartSidebar />
      <ToastContainer />
      <CheckoutModal />
    </>
  )
}

const defaultProps = {
  children: <></>,
}

Page.defaultProps = defaultProps
export default Page
