import { TextInput, Text } from '@lebernardo/react'
import { ShoppingCartSimple } from 'phosphor-react'
import Badge from '../Badge'

const styles = {
  container: 'max-w-5xl mx-auto p-3 flex items-center justify-between',
  btn: 'w-10 h-10 rounded-full border-none hover:bg-gray800 flex items-center justify-center relative',
}

const Header = () => {
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
          />
        </form>

        <button className={styles.btn}>
          <ShoppingCartSimple className="text-white" />
          <Badge variant="secondary" className="absolute right-0 top-0">
            4
          </Badge>
        </button>
      </div>
    </header>
  )
}

export default Header
