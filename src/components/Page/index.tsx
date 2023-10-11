import Header from '@/components/Header'
import CartSidebar from '@/components/CartSidebar'
import { ToastContainer } from 'react-toastify'
import styles from './styles'

type PageProps = {
  children?: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <CartSidebar />
      <ToastContainer />
    </>
  )
}

const defaultProps = {
  children: <></>,
}

Page.defaultProps = defaultProps
export default Page
