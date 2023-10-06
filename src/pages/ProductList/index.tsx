import ProductGrid from '@/components/ProductGrid'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import List, { ListItem } from '@/components/List'
import { Heading, Text } from '@lebernardo/react'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '@/helpers/products'

const mockProducts: app.Product[] = [
  {
    name: 'leg warmers',
    image: 'https://source.unsplash.com/random?product=',
    price: 49.9,
  },
  {
    name: 'controller',
    image: 'https://source.unsplash.com/random?product=',
    price: 99.9,
  },
  {
    name: 'towel',
    image: 'https://source.unsplash.com/random?product=',
    price: 10,
  },
  {
    name: 'soda can',
    image: 'https://source.unsplash.com/random?product=',
    price: 11,
  },
]

function ProductList() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-5xl mx-auto my-10">
          <Heading className="text-center mb-4 font-heading">Produtos</Heading>
          <ProductGrid items={mockProducts} />
        </div>
      </main>

      <Sidebar isOpen={true}>
        <Text size="xl" className="mb-5">
          Carrinho de compras
        </Text>
        <List>
          {mockProducts.map((product, i) => (
            <ListItem key={i}>
              <figure className="bg-gray600 rounded-lg w-36 h-13 overflow-hidden">
                <img
                  className="object-cover w-auto h-auto aspect-square"
                  src={`https://source.unsplash.com/random?product=${i}`}
                  alt=""
                />
              </figure>
              <div className="whitespace-nowrap overflow-hidden w-full">
                <Text size="md">{product.name}</Text>
                <Text size="sm" className="text-gray400">
                  Quantity: <strong>1</strong>
                </Text>
              </div>
              <div className="text-right">
                <Text className="text-base300 font-bold">
                  {formatDecimalToReal(99.9)}
                </Text>
                <div className="flex mt-2 justify-end">
                  <button className="bg-gray-700 p-1">
                    <Minus className="text-white text-xs" />
                  </button>
                  <button className="bg-gray-800 p-1">
                    <Plus className="text-white text-xs" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button className="p-2 hover:bg-gray800 rounded-full">
                  <TrashSimple className="text-gray200 hover:text-white" />
                </button>
              </div>
            </ListItem>
          ))}
        </List>
      </Sidebar>
    </>
  )
}

export default ProductList
