import { Text } from '@lebernardo/react'
import { ShoppingCartSimple, UserCircle } from 'phosphor-react'
import Dropdown from '@/components/common/Dropdown'
import { useHeader } from '../hooks'
import { HeaderControlContainer, BadgeContainer } from './styles'
import { userMenuOptions } from './utils'

const HeaderControl = () => {
  const { toggleSidebar, redirectToAccount, user, totalCartItems } = useHeader()

  return (
    <HeaderControlContainer>
      {user ? (
        <>
          {user.name && (
            <Text>
              Olá, <span>{user.name}</span>
            </Text>
          )}
          <Dropdown items={userMenuOptions} />
        </>
      ) : (
        <button aria-label="button-redirect-login" onClick={redirectToAccount}>
          <UserCircle />
        </button>
      )}

      <button
        aria-label="button-toggle-sidebar"
        data-cy="button-cart"
        onClick={toggleSidebar}
      >
        <ShoppingCartSimple />
        <BadgeContainer>{totalCartItems}</BadgeContainer>
      </button>
    </HeaderControlContainer>
  )
}

export default HeaderControl
