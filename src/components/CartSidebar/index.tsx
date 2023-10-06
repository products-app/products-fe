import Sidebar from '@/components/Sidebar'
import { Text, Card, Button } from '@lebernardo/react'
import ListCart from './components/ListCart'
import EmptyCart from './components/EmptyCart'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { setOpen } from '@/store/slices/sidebar'
import { countCartItems } from '@/helpers/cart'

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
          </div>
        </div>

        <Card className="fixed right-0 bottom-0 w-full">
          <Button variant="primary" className="w-full my-4">
            Comprar agora
          </Button>
        </Card>
      </div>

      {totalCartItems === 0 && <EmptyCart />}
    </Sidebar>
  )
}

export default CartSidebar
