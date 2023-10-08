import { lazy, LazyExoticComponent, Suspense } from 'react'

const Search = lazy(() => import('./components/Search/index'))
const CartItems = lazy(() => import('./components/CartItems/index'))
const ListProducts = lazy(() => import('./components/ListProducts/index'))
const Page = lazy(() => import('./components/Page/index'))

type LazyComponentType = LazyExoticComponent<(props: object) => JSX.Element>

interface NotFoundVariants {
  [key: string]: LazyComponentType
}

const variants: NotFoundVariants = {
  search: Search,
  'cart-items': CartItems,
  'list-products': ListProducts,
  page: Page,
}

type NotFoundProps = {
  variant: string
  componentProps?: object
}

const NotFound = ({ variant, componentProps }: NotFoundProps) => {
  const LazyComponent: LazyComponentType = variants[variant]
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LazyComponent {...componentProps} />
    </Suspense>
  )
}

export default NotFound
