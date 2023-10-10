import { Heading, Button, Text } from '@lebernardo/react'
import {
  formatDecimalToReal,
  getProductImage,
  getProductStock,
} from '@/helpers/products'
import { useDispatch } from 'react-redux'
import { addItem } from '@/store/slices/cart'
import styles from './styles'

type ProductGridProps = {
  items: app.Product[]
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product: app.Product) => {
    dispatch(addItem(product))
  }

  return (
    <section className={styles.grid}>
      {items.map((product, i) => (
        <figure key={product.id + i} className={styles.gridItemProduct}>
          <img
            src={getProductImage(product.image)}
            className={styles.imgProduct}
          />

          <figcaption className={styles.wrapperText}>
            <Heading size="sm" className={styles.textProductName}>
              {product.name}
            </Heading>
            <Text>{formatDecimalToReal(product.price)}</Text>

            <div className={styles.wrapperControls}>
              <Button
                variant="outline"
                className={styles.buttonAddToCart}
                onClick={() => handleAddToCart(product)}
                disabled={
                  getProductStock(product.stock) === 0 || product.price === 0
                }
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

export default ProductGrid
