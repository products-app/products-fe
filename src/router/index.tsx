import { createBrowserRouter } from 'react-router-dom'
import ProductAdd from '@/pages/Admin/ProductAdd'
import ProductList from '@/pages/ProductList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/admin/add-product',
    element: <ProductAdd />,
  },
])

export default router
