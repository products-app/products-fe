import { useAppSelector } from '@/store'
import { setOpen } from '@/store/slices/sidebar'
import { countCartItems } from '@/helpers/cart'
import { useDispatch } from 'react-redux'
import { Text, Button, Card } from '@lebernardo/react'
import Sidebar from '@/components/Sidebar'
import NotFound from '@/components/NotFound'
import ListCart from './components/ListCart'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { cartItems, open } = useAppSelector((state) => {
    return {
      cartItems: state.cart.items,
      open: state.sidebarControl.open,
    }
  })

  const totalCartItems = countCartItems(cartItems)

  const handleCloseSidebar = () => {
    dispatch(setOpen(false))
  }

  return (
    <Sidebar isOpen={open} onClose={handleCloseSidebar}>
      <div className="flex flex-col justify-between h-full relative">
        <div className="relative h-[80%]">
          <Text size="xl" className="mb-5">
            Carrinho de compras
          </Text>
          <div className="w-full h-[90%] overflow-y-scroll">
            {cartItems && totalCartItems > 0 && <ListCart items={cartItems} />}
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
