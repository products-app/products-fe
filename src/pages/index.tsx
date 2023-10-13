import { useEffect } from 'react'
import { useStore } from '@/store/products'
import { useSearchStore } from '@/store/search'
import { Heading } from '@lebernardo/react'
import Page from '@/components/Page'
import ProductGrid from '@/components/ProductGrid'
// import NotFound from '@/components/NotFound'
import { filterProductsBySearchTerm } from '@/helpers/products'

function ProductList() {
  const searchTerm = useSearchStore((state) => state.searchTerm)
  const loadData = useStore((state) => state.loadData)
  const products = useStore((state) => state.products)

  useEffect(() => {
    loadData(searchTerm)
  }, [])

  const filteredProducts: app.Product[] = filterProductsBySearchTerm(
    products,
    '',
  )

  return (
    <Page>
      <Heading className="text-center mb-4 font-heading">Produtos</Heading>
      {filteredProducts.length > 0 && (
        <ProductGrid items={filterProductsBySearchTerm(products, searchTerm)} />
      )}

      {filteredProducts.length === 0 && searchTerm === '' && (
        <div className="h-screen w-full">
          hi
          {/* <NotFound variant="list-products" /> */}
        </div>
      )}
    </Page>
  )
}

export default ProductList
