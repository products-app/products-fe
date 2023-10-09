import { createBrowserRouter } from 'react-router-dom'
import ProductList from '../pages/ProductList'

const router = createBrowserRouter([
  {
    id: 'list-products',
    path: '/',
    element: <ProductList />,
  },
])

export default router
