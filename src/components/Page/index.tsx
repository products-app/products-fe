import Header from '../../components/Header'
import CartSidebar from '../CartSidebar'

const styles = {
  container: 'max-w-5xl mx-auto my-10',
}

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <CartSidebar />
    </>
  )
}

export default Page
