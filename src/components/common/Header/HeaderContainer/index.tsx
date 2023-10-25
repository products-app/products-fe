import Link from 'next/link'
import SearchInput from '@/components/common/SearchInput'
import { useSearch } from '../hooks'
import { HeaderSection, Header } from './styles'
import dynamic from 'next/dynamic'

const HeaderControl = dynamic(() => import('../HeaderControl'), {
  ssr: false,
})

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
