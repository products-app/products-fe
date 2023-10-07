import { Text } from '@lebernardo/react'
import styles from './styles'

const EmptyCart = () => (
  <div className={styles.container}>
    <img
      className={styles.defaultImg}
      src="/empty_cart.png"
      alt="Imagem de carrinho vazio"
    />
    <Text className={styles.message}>Adicione algo em seu carrinho...</Text>
  </div>
)

export default EmptyCart
