import { Heading } from '@lebernardo/react'

import Page from '../../components/Page'
import ProductGrid from '../../components/ProductGrid'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function ProductList() {
  const products = useSelector((state: RootState) => state.products)

  return (
    <Page>
      <Heading className="text-center mb-4 font-heading">Produtos</Heading>
      <ProductGrid items={products} />
    </Page>
  )
}

export default ProductList
