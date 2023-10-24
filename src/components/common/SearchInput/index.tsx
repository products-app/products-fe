import { TextInput } from '@lebernardo/react'
import { useSearch } from './hooks'
import { InputContainer } from './styles'

const SearchInput = () => {
  const { searchTerm, handleChange } = useSearch()

  return (
    <InputContainer>
      <TextInput
        type="text"
        id="search"
        placeholder="Pesquise por produtos"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </InputContainer>
  )
}

export default SearchInput
