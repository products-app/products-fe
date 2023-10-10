import { createBrowserRouter } from 'react-router-dom'
import AdminProductList from '@/pages/Admin/ProductList'
import AdminProductAdd from '@/pages/Admin/ProductAdd'
import ProductList from '@/pages/ProductList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/admin/add-product',
    element: <AdminProductAdd />,
  },
  {
    path: '/admin/list-product',
    element: <AdminProductList />,
  },
])

export default router
