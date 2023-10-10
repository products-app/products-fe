import { Heading, Button, Text } from '@lebernardo/react'
import {
  formatDecimalToReal,
  getProductImage,
  getProductStock,
} from '@/helpers/products'
import styles from './styles'
import { useCartStore } from '@/root/src/store/cart'

type ProductGridProps = {
  items: app.Product[]
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: app.Product) => {
    addItem(product)
  }

  return (
    <section className={styles.grid}>
      {items.map((product, i) => (
        <figure
          key={product?.id && product?.id + i}
          className={styles.gridItemProduct}
        >
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
