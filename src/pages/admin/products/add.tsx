import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useStore } from '@/stores'

import { postProducts } from '@/api/products'
import { Heading, Text, Card, Button } from '@lebernardo/react'
import { Input } from './styles'

const styles = {
  container: 'max-w-3xl m-auto py-12',
  col2: 'flex items-center gap-2',
  card: 'flex flex-col gap-8',
  inputWrapper: 'flex flex-col gap-2 w-full',
  checkboxWrapper: 'flex flex-row gap-2 items-center',
  actionsWrapper: 'flex items-center gap-4 justify-end',
  input: 'bg-gray900 p-4 mb-6',
}

type Inputs = {
  image: string
  name: string
  price: string
  stock: string
  active?: boolean
}

function AdminProductAdd() {
  const router = useRouter()
  const userToken = useStore((state) => state.user?.token)
  const { register, handleSubmit } = useForm<Inputs>()

  const handleCreate: SubmitHandler<Inputs> = async (data) => {
    const product = {
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
    }
    postProducts(product, userToken)
      .then(() => {
        toast('Produto cadastrado com sucesso!')
        router.push('/admin/products')
      })
      .catch(() => {
        toast.error(`Ocorreu um erro! Tente novamente mais tarde!`, {
          theme: 'dark',
        })
      })
  }

  return (
    <div className={styles.container}>
      <div className="text-center mb-4 font-heading">
        <Heading>Cadastrar Produto</Heading>
        <Text>
          Adicione informações do produto. Você pode editar essas informações
          depois.
        </Text>
      </div>

      <Card className={styles.card}>
        <form onSubmit={handleSubmit(handleCreate)}>
          <div className={styles.inputWrapper}>
            <Text size="sm">Imagem</Text>
            <Input type="url" {...register('image')} />
          </div>

          <div className={styles.inputWrapper}>
            <Text size="sm">Nome</Text>
            <Input type="text" {...register('name')} />
          </div>

          <div className={styles.col2}>
            <div className={styles.inputWrapper}>
              <Text size="sm">Preço</Text>
              <Input type="number" {...register('price')} />
            </div>

            <div className={styles.inputWrapper}>
              <Text size="sm">Estoque</Text>
              <Input type="number" {...register('stock')} />
            </div>
          </div>

          <div className={styles.actionsWrapper}>
            <Button type="submit">Salvar</Button>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default AdminProductAdd
