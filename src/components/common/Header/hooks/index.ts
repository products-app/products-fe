import { useRouter } from 'next/navigation'
import { useStore } from '@/stores'
import { countCartItems } from '@/helpers/cart'

const useHeader = () => {
  const router = useRouter()
  const { openSidebar, setOpenSidebar, items, user } = useStore()
  const totalCartItems = countCartItems(items || [])

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  const redirectToAccount = () => {
    router.push('/account')
  }

  return {
    toggleSidebar,
    redirectToAccount,
    totalCartItems,
    user,
  }
}

const useSearch = () => {
  const { searchTerm, setSearch } = useStore()

  const handleChange = (value: string) => {
    setSearch(value)
  }

  return {
    searchTerm,
    handleChange,
  }
}

export { useHeader, useSearch }
