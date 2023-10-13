import { countCartItems } from '@/helpers/cart'
import { Text, Button, Card } from '@lebernardo/react'
import Sidebar from '@/components/Sidebar'
import NotFound from '@/components/NotFound'
import ListCart from './components/ListCart'
import { useCartStore } from '@/store/cart'
import { useSidebarStore } from '@/store/sidebar'
import { useUserStore } from '@/store/user'
import { useRouter } from 'next/navigation'

const CartSidebar = () => {
  const router = useRouter()
  const cartItems = useCartStore((state) => state.cartItems)
  const open = useSidebarStore((state) => state.open)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const setOpenCheckout = useSidebarStore((state) => state.setOpenCheckout)
  const totalCartItems = countCartItems(cartItems)
  const userToken = useUserStore((state) => state.userToken)

  const handleCloseSidebar = () => {
    setOpen(false)
  }

  const handleOpenCheckout = () => {
    if (userToken) {
      setOpenCheckout(true)
    } else {
      router.push('/account')
    }
  }

  return (
    <Sidebar isOpen={open} onClose={handleCloseSidebar}>
      <div className="flex flex-col justify-between h-full relative">
        <div className="relative h-[80%]">
          <Text size="xl" className="mb-5">
            Carrinho de compras
          </Text>
          <div
            id="cart-sidebar-items"
            className="w-full h-[90%] overflow-y-scroll"
          >
            {cartItems && totalCartItems > 0 && (
              <ListCart items={cartItems} />
            )}
            {/* {totalCartItems === 0 && <NotFound variant="cart-items" />} */}
          </div>
        </div>

        {totalCartItems > 0 && (
          <Card className="fixed right-0 bottom-0 w-full">
            <Button
              variant="primary"
              className="w-full my-4"
              onClick={handleOpenCheckout}
            >
              Comprar agora
            </Button>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}

export default CartSidebar
