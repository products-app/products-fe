import { Text } from '@lebernardo/react'
import {
  ShoppingCartSimple,
  UserCircle,
  SignOut,
  Package,
} from 'phosphor-react'
import { countCartItems } from '@/helpers/cart'
import { useRouter } from 'next/navigation'
import { Dropdown } from '@/components/Dropdown'
import { UserActionContainer, BadgeContainer } from './styles'
import { useStore } from '@/stores'

const UserControl = () => {
  const router = useRouter()

  const { openSidebar, setOpenSidebar, resetUser, items, userName } = useStore(
    (state) => ({
      openSidebar: state.openSidebar,
      setOpenSidebar: state.setOpenSidebar,
      resetUser: state.resetUser,
      items: state.items,
      userName: state.user?.name,
    }),
  )

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
      onClick: resetUser,
    },
  ]

  const handleOpen = () => {
    setOpenSidebar(!openSidebar)
  }

  const handleAccount = () => {
    router.push('/account')
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
          <p>{items ? countCartItems(items) : '0'}</p>
        </BadgeContainer>
      </button>
    </UserActionContainer>
  )
}

export default UserControl
