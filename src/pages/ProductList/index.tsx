import ProductGrid from '../../components/ProductGrid'
import Header from '../../components/Header'
import { Heading } from '@lebernardo/react'

const products = [
  {
    id: 1,
    name: 'leg warmers',
    image: 'https://source.unsplash.com/random?product=',
    price: 49.9,
  },
  {
    id: 2,
    name: 'controller',
    image: 'https://source.unsplash.com/random?product=',
    price: 99.9,
  },
  {
    id: 3,
    name: 'towel',
    image: 'https://source.unsplash.com/random?product=',
    price: 10,
  },
  {
    id: 4,
    name: 'soda can',
    image: 'https://source.unsplash.com/random?product=',
    price: 11,
  },
]

function List() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-5xl mx-auto my-10">
          <Heading className="text-center mb-4 font-heading">Produtos</Heading>
          <ProductGrid items={products} />
        </div>
      </main>
    </>
  )
}

export default List
