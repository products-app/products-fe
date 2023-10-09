import { TextInput, Text } from '@lebernardo/react'
import { ShoppingCartSimple } from 'phosphor-react'

const Header = () => {
  return (
    <header className="bg-gray700">
      <div className="max-w-5xl mx-auto p-3 flex items-center justify-between">
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
          />
        </form>

        <button className="w-10 h-10 rounded-full border-none hover:bg-gray800 flex items-center justify-center">
          <ShoppingCartSimple className="text-white" />
        </button>
      </div>
    </header>
  )
}

export default Header
