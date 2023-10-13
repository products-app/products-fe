import { TextInput } from '@lebernardo/react'
import { useSearchStore } from '@/store/search'
import { HeaderSection, HeaderContainer, InputContainer } from './styles'
import UserControl from './components/UserControl'

const Header = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm)
  const setSearch = useSearchStore((state) => state.setSearch)

  const handleChange = (value: string) => {
    setSearch(value)
  }

  return (
    <HeaderSection>
      <HeaderContainer>
        <a href="/">
          Prompt
        </a>

        <InputContainer>
          <TextInput
            type="text"
            id="search"
            placeholder="Pesquise por produtos"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
            value={searchTerm}
          />
        </InputContainer>

        <UserControl />
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
