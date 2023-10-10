import { TextInput, Text } from '@lebernardo/react'
import { ShoppingCartSimple } from 'phosphor-react'
import Badge from '@/components/Badge'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { setOpen } from '@/store/slices/sidebar'
import { countCartItems } from '@/helpers/cart'
import { setSearch } from '../../store/slices/search'

const styles = {
  container: 'max-w-5xl mx-auto p-3 flex items-center justify-between',
  btn: 'w-10 h-10 rounded-full border-none hover:bg-gray800 flex items-center justify-center relative',
}

const Header = () => {
  const dispatch = useDispatch()

  const { cartItems, sidebarControl, searchTerm } = useAppSelector((state) => {
    return {
      cartItems: state.cart.items,
      sidebarControl: state.sidebarControl,
      searchTerm: state.search.searchTerm,
    }
  })

  const handleOpen = () => {
    dispatch(setOpen(!sidebarControl.open))
  }

  const handleChange = (value: string) => {
    dispatch(setSearch(value))
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

        <button className={styles.btn} onClick={handleOpen}>
          <ShoppingCartSimple className="text-white" />
          <Badge variant="secondary" className="absolute right-0 top-0">
            {cartItems ? countCartItems(cartItems) : '0'}
          </Badge>
        </button>
      </div>
    </header>
  )
}

export default Header
