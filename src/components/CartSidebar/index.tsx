import { useSyncExternalStore } from 'react'
import { countCartItems } from '@/helpers/cart'
import { Text, Button, Card } from '@lebernardo/react'
import Sidebar from '@/components/Sidebar'
import NotFound from '@/components/NotFound'
import ListCart from './components/ListCart'
import { useCartStore } from '@/root/src/store/cart'
import { useSidebarStore } from '@/root/src/store/slices/sidebar'

const CartSidebar = () => {
  const cart = useSyncExternalStore(
    useCartStore.subscribe,
    useCartStore.getState,
  )
  const open = useSidebarStore((state) => state.open)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const totalCartItems = countCartItems(cart.cartItems)

  const handleCloseSidebar = () => {
    setOpen(false)
  }

  return (
    <Sidebar isOpen={open} onClose={handleCloseSidebar}>
      <div className="flex flex-col justify-between h-full relative">
        <div className="relative h-[80%]">
          <Text size="xl" className="mb-5">
            Carrinho de compras
          </Text>
          <div className="w-full h-[90%] overflow-y-scroll">
            {cart.cartItems && totalCartItems > 0 && (
              <ListCart items={cart.cartItems} />
            )}
            {totalCartItems === 0 && <NotFound variant="cart-items" />}
          </div>
        </div>

        {totalCartItems > 0 && (
          <Card className="fixed right-0 bottom-0 w-full">
            <Button variant="primary" className="w-full my-4">
              Comprar agora
            </Button>
          </Card>
        )}
      </div>
    </Sidebar>
  )
}

export default CartSidebar
