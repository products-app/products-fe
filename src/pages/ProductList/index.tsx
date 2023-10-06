import { Heading } from '@lebernardo/react'

import Page from '@/components/Page'
import ProductGrid from '@/components/ProductGrid'

import { useAppSelector } from '@./store'

function ProductList() {
  const products = useAppSelector((state) => state.products)

  return (
    <Page>
      <Heading className="text-center mb-4 font-heading">Produtos</Heading>
      <ProductGrid items={products} />
    </Page>
  )
}

export default ProductList
