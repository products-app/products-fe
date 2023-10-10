import { createBrowserRouter } from 'react-router-dom'
import ProductList from '@/pages/ProductList'
import AdminProductAdd from '@/pages/Admin/ProductAdd'
import AdminProductList from '@/pages/Admin/ProductList'
import PageNotFound from '@/pages/PageNotFound'

const router = createBrowserRouter([
  {
    id: 'list-products',
    path: '/',
    element: <ProductList />,
  },
  {
    id: 'add-product',
    path: '/admin/add-product',
    element: <AdminProductAdd />,
  },
  {
    id: 'admin-list-products',
    path: '/admin/list-product',
    element: <AdminProductList />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default router
