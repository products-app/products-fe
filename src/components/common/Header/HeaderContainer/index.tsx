import Link from 'next/link'
import HeaderControl from '@/components/common/Header/HeaderControl'
import SearchInput from '@/components/common/SearchInput'
import { useSearch } from '../hooks'
import { HeaderSection, Header } from './styles'

const HeaderContainer = () => {
  const { searchTerm, handleChange } = useSearch()

  return (
    <HeaderSection>
      <Header>
        <Link href="/">Prompt</Link>

        <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
        <HeaderControl />
      </Header>
    </HeaderSection>
  )
}

export default HeaderContainer
