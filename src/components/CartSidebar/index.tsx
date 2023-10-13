import { countCartItems } from '@/helpers/cart'
import Sidebar from '@/components/Sidebar'
import NotFoundCartItems from '@/components/NotFound/CartItems'
import ListCart from './components/ListCart'
import { useCartStore } from '@/store/cart'
import { useSidebarStore } from '@/store/sidebar'
import { useUserStore } from '@/store/user'
import { useRouter } from 'next/navigation'
import useFromStore from "@/hooks/store"
import { SidebarContainer, CartContainer, ItemsContainer, ItemsText, CartControl, ButtonContainer } from './styles'

const CartSidebar = () => {
  const router = useRouter()
  const cartItems = useFromStore(useCartStore, state => state.cartItems)
  const open = useSidebarStore((state) => state.open)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const setOpenCheckout = useSidebarStore((state) => state.setOpenCheckout)
  const totalCartItems = countCartItems(cartItems || {})
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
      <SidebarContainer>
        <CartContainer>
          <ItemsText size="lg">
            Carrinho de compras
          </ItemsText>
          <ItemsContainer id="cart-sidebar-items">
            {cartItems && totalCartItems > 0 && (
              <ListCart items={cartItems} />
            )}

            {totalCartItems === 0 && <NotFoundCartItems />}
          </ItemsContainer>
        </CartContainer>

        {totalCartItems > 0 && (
          <CartControl>
            <ButtonContainer
              variant="primary"
              onClick={handleOpenCheckout}
            >
              Comprar agora
            </ButtonContainer>
          </CartControl>
        )}
      </SidebarContainer>
    </Sidebar>
  )
}

export default CartSidebar
