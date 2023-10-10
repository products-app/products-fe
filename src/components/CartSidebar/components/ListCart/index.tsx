import { Text } from '@lebernardo/react'
import List, { ListItem } from '@/components/List'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '@/helpers/products'
import { useCartStore } from '@/store/cart'
import styles from './styles'

type PageProps = {
  items?: object
}

const ListCart = ({ items }: PageProps) => {
  const decrementItem = useCartStore((state) => state.decrementItem)
  const incrementItem = useCartStore((state) => state.incrementItem)
  const removeItem = useCartStore((state) => state.removeItem)

  const handleDecrementItem = (uuid: string) => {
    decrementItem(uuid)
  }

  const handleIncrementItem = (uuid: string) => {
    incrementItem(uuid)
  }

  const handleRemoveItem = (uuid: string) => {
    removeItem(uuid)
  }

  return (
    <List>
      {Object.entries(items).map(([key, value], i) => (
        <ListItem key={i}>
          <figure className={styles.containerImg}>
            <img
              className={styles.imgItem}
              src={value.image}
              alt={value.name}
            />
          </figure>

          <div className={styles.containerProductText}>
            <Text size="md">{value.name}</Text>
            <Text size="sm" className={styles.textProductQuantity}>
              Qtde: <strong>{value.quantity}</strong>
            </Text>
          </div>

          <div className={styles.containerControls}>
            <Text className={styles.textProductPrice}>
              {formatDecimalToReal(99.9)}
            </Text>
            <div className={styles.containerQuantityControls}>
              <button
                name="minus"
                className={styles.buttonQuantityMinus}
                onClick={() => handleDecrementItem(key)}
                disabled={value.quantity === 1}
              >
                <Minus className={styles.buttonIconQuantity} />
              </button>
              <button
                className={styles.buttonQuantityPlus}
                onClick={() => handleIncrementItem(key)}
                disabled={value.quantity === value.stock}
              >
                <Plus className={styles.buttonIconQuantity} />
              </button>
            </div>
          </div>

          <div className={styles.containerControls}>
            <button
              className={styles.buttonRemoveProduct}
              onClick={() => handleRemoveItem(key)}
            >
              <TrashSimple className={styles.buttonIconRemove} />
            </button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

const defaultProps = {
  items: [],
}

ListCart.defaultProps = defaultProps
export default ListCart
