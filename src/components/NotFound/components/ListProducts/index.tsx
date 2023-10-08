import { Package } from 'phosphor-react'
import { Heading, Text } from '@lebernardo/react'
import styles from './styles'

const ListProducts = () => (
  <div className={styles.container}>
    <Package className={styles.iconNotFound} />
    <Heading size="lg" className={styles.heading}>
      Não há produtos disponíveis
    </Heading>
    <Text size="lg" className={styles.textDescription}>
      Tente recarregar a página ou tentar mais tarde
    </Text>
  </div>
)

export default ListProducts
