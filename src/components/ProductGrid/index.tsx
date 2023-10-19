import { Text } from '@lebernardo/react'
import {
  formatDecimalToReal,
  getProductImage,
  getProductStock,
} from '@/helpers/products'
import {
  ProductItemContainer,
  Grid,
  ButtonContainer,
  ButtonAddToCart,
  ProductName,
} from './styles'
import { useCartStore } from '@/store/cart'
import Image from 'next/image'

type ProductGridProps = {
  items: app.Product[]
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: app.Product) => {
    addItem(product)
  }

  return (
    <Grid id="product-grid">
      {items.map((product, i) => (
        <ProductItemContainer key={product?.id && product?.id + i}>
          <Image
            src={getProductImage(product.image)}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
          />

          <figcaption>
            <ProductName size="sm">{product.name}</ProductName>
            <Text>{formatDecimalToReal(product.price)}</Text>

            <ButtonContainer>
              <ButtonAddToCart
                variant="outline"
                onClick={() => handleAddToCart(product)}
                disabled={
                  getProductStock(product.stock) === 0 || product.price === 0
                }
              >
                Adicionar ao carrinho
              </ButtonAddToCart>
            </ButtonContainer>
          </figcaption>
        </ProductItemContainer>
      ))}
    </Grid>
  )
}

export default ProductGrid
