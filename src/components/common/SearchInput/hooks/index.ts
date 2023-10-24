import { useStore } from '@/stores'

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

export { useSearch }
