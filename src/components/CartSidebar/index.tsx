import { countCartItems } from '@/helpers/cart'
import Sidebar from '@/components/Sidebar'
import NotFoundCartItems from '@/components/NotFound/CartItems'
import ListCart from './components/ListCart'
import { useRouter } from 'next/navigation'
import { useStore } from '@/stores'
import {
  SidebarContainer,
  CartContainer,
  ItemsContainer,
  ItemsText,
  CartControl,
  ButtonContainer,
} from './styles'

const CartSidebar = () => {
  const router = useRouter()
  const { cartItems, openSidebar, setOpenSidebar, setOpenCheckout, userToken } =
    useStore((state) => ({
      cartItems: state.items,
      openSidebar: state.openSidebar,
      setOpenSidebar: state.setOpenSidebar,
      setOpenCheckout: state.setOpenCheckout,
      userToken: state.user?.token,
    }))
  const totalCartItems = countCartItems(cartItems || [])

  const handleCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleOpenCheckout = () => {
    if (userToken) {
      setOpenCheckout(true)
    } else {
      router.push('/account')
    }
  }

  return (
    <Sidebar isOpen={openSidebar} onClose={handleCloseSidebar}>
      <SidebarContainer>
        <CartContainer>
          <ItemsText size="lg">Carrinho de compras</ItemsText>
          <ItemsContainer id="cart-sidebar-items">
            {cartItems && totalCartItems > 0 && <ListCart items={cartItems} />}

            {totalCartItems === 0 && <NotFoundCartItems />}
          </ItemsContainer>
        </CartContainer>

        {totalCartItems > 0 && (
          <CartControl>
            <ButtonContainer variant="primary" onClick={handleOpenCheckout}>
              Comprar agora
            </ButtonContainer>
          </CartControl>
        )}
      </SidebarContainer>
    </Sidebar>
  )
}

export default CartSidebar
