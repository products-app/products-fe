import { Grid } from './styles'
import ProductItem from '../ProductItem'

type ProductGridProps = {
  items: app.Product[]
}

const ProductGrid = ({ items }: ProductGridProps) => {
  return (
    <Grid id="product-grid">
      {items.map((product, i) => (
        <ProductItem product={product} key={product.name + i} />
      ))}
    </Grid>
  )
}

export default ProductGrid
