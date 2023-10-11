import { useSyncExternalStore } from 'react'
import { TextInput, Text } from '@lebernardo/react'
import { ShoppingCartSimple, UserCircle, SignOut } from 'phosphor-react'
import Badge from '@/components/Badge'
import { countCartItems } from '@/helpers/cart'
import { useSidebarStore } from '@/root/src/store/sidebar'
import { useSearchStore } from '@/root/src/store/search'
import { useCartStore } from '@/root/src/store/cart'
import { useUserStore } from '@/root/src/store/user'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from '@/components/Dropdown'

const styles = {
  container: 'max-w-5xl mx-auto p-3 flex items-center justify-between',
  btn: 'w-10 h-10 rounded-full border-none hover:bg-gray800 flex items-center justify-center relative',
}

const Header = () => {
  const navigate = useNavigate()
  const open = useSidebarStore((state) => state.open)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const searchTerm = useSearchStore((state) => state.searchTerm)
  const setSearch = useSearchStore((state) => state.setSearch)
  const userName = useUserStore((state) => state.userName)
  const userToken = useUserStore((state) => state.userToken)
  const deleteToken = useUserStore((state) => state.deleteToken)

  const cart = useSyncExternalStore(
    useCartStore.subscribe,
    useCartStore.getState,
  )

  const dropdownOptions: app.DropdownItem[] = [
    // {
    //   label: 'Editar perfil',
    //   link: '/profile',
    //   icon: <PencilSimple className="text-gray200 text-lg" />,
    // },
    {
      label: 'Fazer logout',
      link: 'javascript:void',
      icon: <SignOut className="text-gray200 text-lg" />,
      onClick: deleteToken,
    },
  ]

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleChange = (value: string) => {
    setSearch(value)
  }

  const handleAccount = () => {
    navigate('/login')
  }

  return (
    <header className="bg-gray700">
      <div className={styles.container}>
        <a href="#" className="flex items-center">
          <Text className="font-bold text-white" size="xl">
            Prompt
          </Text>
        </a>

        <form className="flex-1 max-w-xs">
          <TextInput
            type="text"
            id="search"
            placeholder="Pesquise por produtos"
            onChange={(e) => handleChange(e.target.value)}
            value={searchTerm}
          />
        </form>

        <div className="flex items-center gap-4">
          {userToken ? (
            <>
              {userName && (
                <Text>
                  Olá, <span>{userName}</span>
                </Text>
              )}
              <Dropdown items={dropdownOptions} />
            </>
          ) : (
            <button className={styles.btn} onClick={handleAccount}>
              <UserCircle className="text-white text-lg" />
            </button>
          )}

          <button className={styles.btn} onClick={handleOpen}>
            <ShoppingCartSimple className="text-white" />
            <Badge variant="secondary" className="absolute right-0 top-0">
              {cart.cartItems ? countCartItems(cart.cartItems) : '0'}
            </Badge>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
