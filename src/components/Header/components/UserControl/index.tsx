import { Text } from '@lebernardo/react'
import {
  ShoppingCartSimple,
  UserCircle,
  SignOut,
  Package,
} from 'phosphor-react'
import { countCartItems } from '@/helpers/cart'
import { useSidebarStore } from '@/store/sidebar'
import { useCartStore } from '@/store/cart'
import { useUserStore } from '@/store/user'
import { useRouter } from 'next/navigation'
import { Dropdown } from '@/components/Dropdown'
import { UserActionContainer, BadgeContainer } from './styles'
import useFromStore from "@/hooks/store"

const UserControl = () => {
  const router = useRouter()
  const open = useSidebarStore((state) => state.open)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const deleteToken = useUserStore((state) => state.deleteToken)
  const cartItems = useFromStore(useCartStore, state => state.cartItems)
  const userName = useFromStore(useUserStore, state => state.userName)

  const dropdownOptions: app.DropdownItem[] = [
    {
      label: 'Meus pedidos',
      link: '/user/orders',
      icon: <Package className="text-gray200 text-lg" />,
    },
    {
      label: 'Fazer logout',
      link: '#',
      icon: <SignOut className="text-gray200 text-lg" />,
      onClick: deleteToken,
    },
  ]

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleAccount = () => {
    router.push("/account")
  }

  return (
    <UserActionContainer id="header-user-actions" suppressHydrationWarning>
      {userName ? (
        <>
          {userName && (
            <Text>
              Olá, <span>{userName}</span>
            </Text>
          )}
          <Dropdown items={dropdownOptions} />
        </>
      ) : (
        <button onClick={handleAccount}>
          <UserCircle />
        </button>
      )}

      <button id="button-cart" onClick={handleOpen}>
        <ShoppingCartSimple />
        <BadgeContainer>
          <p>{cartItems ? countCartItems(cartItems) : '0'}</p>
        </BadgeContainer>
      </button>
    </UserActionContainer>
  )
}

export default UserControl
