import { createBrowserRouter } from 'react-router-dom'
import ProductList from '@/pages/ProductList'
import AdminProductAdd from '@/pages/Admin/ProductAdd'
import AdminProductList from '@/pages/Admin/ProductList'
import PageNotFound from '@/pages/PageNotFound'
import UserLogin from '../pages/User/login'
import UserRegister from '../pages/User/register'

const router = createBrowserRouter([
  {
    id: 'list-products',
    path: '/',
    element: <ProductList />,
  },
  {
    id: 'login',
    path: '/login',
    element: <UserLogin />,
  },
  {
    id: 'register',
    path: '/register',
    element: <UserRegister />,
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
