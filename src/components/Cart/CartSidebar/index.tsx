import Sidebar from '@/components/common/Sidebar'
import NotFoundCartItems from '@/components/NotFound/CartItems'
import ListCart from '@/components/Cart/CartList'
import { useCart } from '../hook'
import {
  SidebarContainer,
  CartContainer,
  ItemsContainer,
  ItemsText,
  CartControl,
  ButtonContainer,
} from './styles'

const CartSidebar = () => {
  const {
    cartItems,
    totalCartItems,
    increaseItem,
    decreaseItem,
    removeItem,
    openSidebar,
    handleCloseSidebar,
    handleOpenCheckout,
  } = useCart()

  return (
    <Sidebar isOpen={openSidebar} onClose={handleCloseSidebar}>
      <SidebarContainer>
        <CartContainer>
          <ItemsText size="lg">Carrinho de compras</ItemsText>
          <ItemsContainer id="cart-sidebar-items">
            {cartItems && totalCartItems > 0 && (
              <ListCart
                items={cartItems}
                actions={{ decreaseItem, increaseItem, removeItem }}
              />
            )}

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
