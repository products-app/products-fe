import { Heading, Button, Text } from '@lebernardo/react'
import { formatDecimalToReal } from '../../helpers/products'

type ProductGridProps = {
  items: app.Product[]
}

const ProductGrid = ({ items }: ProductGridProps) => {
  return (
    <section className="grid grid-cols-3 grid-flow-row gap-4">
      {items.map((product, i) => (
        <figure
          key={product.id + i}
          className="bg-gray600 rounded-lg overflow-hidden"
        >
          <img src={product.image + i} className="w-full aspect-square" />
          <figcaption className="p-4">
            <Heading size="sm" className="text-white">
              {product.name}
            </Heading>
            <Text>{formatDecimalToReal(product.price)}</Text>
            <div className="flex items-center justify-center">
              <Button className="w-full mt-4" variant="outline">
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
