// TO DO: search products in backend api
import { TextInput } from '@lebernardo/react'
import { InputContainer } from './styles'
import { useState } from 'react'

type SearchInputProps = {
  searchTerm: string
  placeholder: string
  handleChange: (val: string) => void
}

const SearchInput = ({
  searchTerm,
  handleChange,
  placeholder,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState(searchTerm)

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (
      event.key === 'Enter' ||
      (event.key === 'Backspace' && searchValue === '')
    ) {
      handleChange(searchValue)
    }
  }

  return (
    <InputContainer>
      <TextInput
        type="text"
        id="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        onKeyUp={handleSearch}
      />
    </InputContainer>
  )
}

const defaultProps = {
  searchTerm: '',
  placeholder: 'Pesquise por produtos',
}

SearchInput.defaultProps = defaultProps
export default SearchInput
