import Datatable from '@/components/Admin/DataTable'
import { Heading, Card } from '@lebernardo/react'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '@/api/products'
import { useQuery } from 'react-query'
import { useMemo } from 'react'

const styles = {
  container: 'max-w-6xl m-auto py-12',
  col2: 'flex items-center gap-2',
  card: 'flex flex-col gap-8',
  inputWrapper: 'flex flex-col gap-2 w-full',
  checkboxWrapper: 'flex flex-row gap-2 items-center',
  actionsWrapper: 'flex items-center gap-4 justify-end',
}

const tableColumns = ['id', 'name', 'stock', 'price', 'active']

function AdminProductList() {
  const navigate = useNavigate()
  const { data } = useQuery(['products'], () => getProducts(''))
  const products = useMemo(() => data?.data, [data])
  const countProducts = products ? products.length : 0

  const handleRedirect = (item: object) => {
    navigate(`/admin/add-product?id=${item.id}`)
  }

  return (
    <div className={styles.container}>
      <div className="text-center mb-4 font-heading">
        <Heading>
          Produtos <span>{countProducts} itens cadastrados</span>
        </Heading>
      </div>

      {products && (
        <Datatable
          columns={tableColumns}
          items={products}
          actionPrimary={handleRedirect}
        />
      )}
    </div>
  )
}

export default AdminProductList
