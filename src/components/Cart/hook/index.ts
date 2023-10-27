import { useRouter } from 'next/navigation'
import { useStore } from '@/stores'
import { countCartItems } from '@/helpers/cart'

const useCart = () => {
  const router = useRouter()

  const {
    items: cartItems,
    openSidebar,
    setOpenSidebar,
    setOpenCheckout,
    user,
    decreaseItem,
    increaseItem,
    removeItem,
  } = useStore()
  const totalCartItems = countCartItems(cartItems || [])

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleOpenCheckout = () => {
    if (user?.token) {
      setOpenCheckout(true)
    } else {
      router.push('/account')
    }
  }

  return {
    cartItems,
    totalCartItems,
    increaseItem,
    decreaseItem,
    removeItem,
    openSidebar,
    handleCloseSidebar,
    handleOpenCheckout,
  }
}

export { useCart }
