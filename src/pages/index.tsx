import { useEffect } from 'react'
import { useStore } from '@/store/products'
import { useSearchStore } from '@/store/search'
import Page from '@/components/Page'
import ProductGrid from '@/components/ProductGrid'
import NotFoundProducts from '@/components/NotFound/ListProducts'
import NotFoundSearch from '@/components/NotFound/Search'
import { filterProductsBySearchTerm } from '@/helpers/products'
import { HeaderSection } from '@/styles/listProducts'

function ProductList() {
  const searchTerm = useSearchStore((state) => state.searchTerm)
  const loadData = useStore((state) => state.loadData)
  const products = useStore((state) => state.products)

  useEffect(() => {
    loadData(searchTerm)
  }, [])

  const filteredProducts: app.Product[] = filterProductsBySearchTerm(
    products,
    searchTerm,
  )

  return (
    <Page>
      <HeaderSection>Produtos</HeaderSection>
      {filteredProducts.length > 0 && (
        <ProductGrid items={filterProductsBySearchTerm(products, searchTerm)} />
      )}

      {products.length === 0 && searchTerm === '' && (
        <NotFoundProducts />
      )}

      {filteredProducts.length === 0 && searchTerm !== '' && (
        <NotFoundSearch searchTerm={searchTerm} />
      )}
    </Page>
  )
}

export default ProductList
