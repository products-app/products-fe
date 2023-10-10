import { Text } from '@lebernardo/react'
import { defaultImages } from '@/constants/images'
import styles from './styles'

const EmptyCart = () => (
  <div className={styles.container}>
    <img
      className={styles.defaultImg}
      src={defaultImages.emptyCart}
      alt="Imagem de carrinho vazio"
    />
    <Text className={styles.message}>Adicione algo em seu carrinho...</Text>
  </div>
)

export default EmptyCart
