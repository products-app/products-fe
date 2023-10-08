import { SmileyXEyes } from 'phosphor-react'
import { Heading, Text } from '@lebernardo/react'
import styles from './styles'

interface SearchProps {
  searchTerm?: string
}

const Search = ({ searchTerm }: SearchProps) => (
  <div className={styles.container}>
    <SmileyXEyes className={styles.iconNotFound} />
    <Heading size="lg" className={styles.heading}>
      Nenhum resultado para:{' '}
      <span className={styles.headingSpan}>{searchTerm}</span>
    </Heading>
    <Text size="lg" className={styles.textDescription}>
      Tente verificar a ortografia ou usar termos mais genéricos
    </Text>
  </div>
)

const defaultProps = {
  searchTerm: '',
}

Search.defaultProps = defaultProps
export default Search
