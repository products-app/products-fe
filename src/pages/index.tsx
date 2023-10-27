import { useStore } from '@/stores'
import { useGetProduct } from '@/hooks/products'
import { filterProductsBySearchTerm } from '@/helpers/products'
import Loading from '@/components/common/Loading'
import NotFoundProducts from '@/components/NotFound/ListProducts'
import Page from '@/components/common/Page'
import { ProductGrid } from '@/components/Product'
import { HeaderSection } from './styles'

function List() {
  const searchTerm = useStore((state) => state.searchTerm)

  const { data: products, isLoading, isError } = useGetProduct(searchTerm)

  if (isError) {
    return (
      <Page>
        <NotFoundProducts />
      </Page>
    )
  }

  if (isLoading) {
    return (
      <Page>
        <Loading message="Carregando, aguarde..." />
      </Page>
    )
  }

  const filteredProducts: app.Product[] | undefined =
    filterProductsBySearchTerm(products, searchTerm)

  return (
    <Page>
      <HeaderSection>Produtos</HeaderSection>

      {filteredProducts && filteredProducts.length > 0 ? (
        <ProductGrid items={filteredProducts} />
      ) : (
        <NotFoundProducts />
      )}
    </Page>
  )
}

export default List
