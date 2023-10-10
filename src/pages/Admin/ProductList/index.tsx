import Datatable from '@/components/Admin/DataTable'
import { Heading, Card } from '@lebernardo/react'
import { useStore } from '@/root/src/store/slices/products'

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
  const products = useStore((state) => state.products)

  const handleRedirect = (item: object) => {
    window.location.href = `/admin/add-product?id=${item.id}`
  }

  const handleRemove = (item: object) => {
    console.log(item)
  }

  return (
    <div className={styles.container}>
      <div className="text-center mb-4 font-heading">
        <Heading>
          Produtos <span>23 itens cadastrados</span>
        </Heading>
      </div>

      <Card className={styles.card}>
        <Datatable
          columns={tableColumns}
          items={products}
          actionPrimary={handleRedirect}
          actionSecondary={handleRemove}
        />
      </Card>
    </div>
  )
}

export default AdminProductList
