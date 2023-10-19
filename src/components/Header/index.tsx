import { useStore } from '@/stores'
import Link from 'next/link'
import { TextInput } from '@lebernardo/react'
import UserControl from './components/UserControl'
import { HeaderSection, HeaderContainer, InputContainer } from './styles'

const Header = () => {
  const { searchTerm, setSearch } = useStore((state) => ({
    searchTerm: state.searchTerm,
    setSearch: state.setSearch,
  }))

  const handleChange = (value: string) => {
    setSearch(value)
  }

  return (
    <HeaderSection>
      <HeaderContainer>
        <Link href="/">Prompt</Link>

        <InputContainer>
          <TextInput
            type="text"
            id="search"
            placeholder="Pesquise por produtos"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value)
            }
            value={searchTerm}
          />
        </InputContainer>

        <UserControl />
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
