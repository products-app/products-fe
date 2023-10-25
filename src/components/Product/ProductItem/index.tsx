import { Text, css } from '@lebernardo/react'
import { formatDecimalToReal, getProductImage } from '@/helpers/products'
import {
  ProductItemContainer,
  ButtonContainer,
  ButtonAddToCart,
  ProductName,
} from './styles'
import Image from 'next/image'
import { useProduct } from '../hook'

type ProductItemProps = {
  product: app.Product
  css?: typeof css
}

const ProductItem = ({ product, css }: ProductItemProps) => {
  const { handleAddToCart, isDisabledAddToCart } = useProduct()

  return (
    <ProductItemContainer css={{ css }}>
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
            disabled={isDisabledAddToCart(product)}
          >
            Adicionar ao carrinho
          </ButtonAddToCart>
        </ButtonContainer>
      </figcaption>
    </ProductItemContainer>
  )
}

const defaultProps = {
  css: '',
}

ProductItem.defaultProps = defaultProps
export default ProductItem
