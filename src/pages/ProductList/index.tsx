import { Heading } from '@lebernardo/react'

import Page from '@/components/Page'
import ProductGrid from '@/components/ProductGrid'
import { filterProductsBySearchTerm } from '@/helpers/products'
import { useAppSelector } from '@/store'
import NotFound from '@/components/NotFound'

function ProductList() {
  const { products, searchTerm } = useAppSelector((state) => {
    return {
      products: state.products,
      searchTerm: state.search.searchTerm,
    }
  })

  const filteredProducts: app.Product[] = filterProductsBySearchTerm(
    products,
    searchTerm,
  )

  return (
    <Page>
      <Heading className="text-center mb-4 font-heading">Produtos</Heading>
      {filteredProducts.length > 0 && (
        <ProductGrid items={filterProductsBySearchTerm(products, searchTerm)} />
      )}

      {filteredProducts.length === 0 && searchTerm === '' && (
        <div className="h-screen w-full">
          <NotFound variant="list-products" />
        </div>
      )}
    </Page>
  )
}

export default ProductList
