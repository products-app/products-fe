import { Heading } from '@lebernardo/react'

import Page from '@/components/Page'
import ProductGrid from '@/components/ProductGrid'
import { filterProductsBySearchTerm } from '@/helpers/products'

import { useAppSelector } from '@/store'

function ProductList() {
  const { products, searchTerm } = useAppSelector((state) => {
    return {
      products: state.products,
      searchTerm: state.search.searchTerm,
    }
  })

  return (
    <Page>
      <Heading className="text-center mb-4 font-heading">Produtos</Heading>
      <ProductGrid items={filterProductsBySearchTerm(products, searchTerm)} />
    </Page>
  )
}

export default ProductList
