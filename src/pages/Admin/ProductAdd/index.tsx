import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { postProducts } from '@/api/products'
import { Heading, Text, Card, Button } from '@lebernardo/react'

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
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const handleCreate: SubmitHandler<Inputs> = async (data) => {
    const product = {
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
    }
    postProducts(product)
      .then(() => {
        toast('Produto cadastrado com sucesso!')
        navigate('/admin/list-product')
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
            <input type="url" {...register('image')} className={styles.input} />
          </div>

          <div className={styles.inputWrapper}>
            <Text size="sm">Nome</Text>
            <input type="text" {...register('name')} className={styles.input} />
          </div>

          <div className={styles.col2}>
            <div className={styles.inputWrapper}>
              <Text size="sm">Preço</Text>
              <input
                type="number"
                {...register('price')}
                className={styles.input}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Text size="sm">Estoque</Text>
              <input
                type="number"
                {...register('stock')}
                className={styles.input}
              />
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
