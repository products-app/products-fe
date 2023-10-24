import { Heading, Text, Card, Button } from '@lebernardo/react'
import Page from '@/components/Page'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createUser } from '@/api/user'
import { useStore } from '@/stores'
import { toast } from 'react-toastify'
import styles, { Input } from './styles'
import { useEffect } from 'react'

type Inputs = {
  name: string
  email: string
  password: string
  phone: string
  username: string
}

function UserRegister() {
  const router = useRouter()
  const { userToken, setUser } = useStore((state) => ({
    userToken: state.user?.token,
    setUser: state.setUser,
  }))

  useEffect(() => {
    if (userToken) {
      router.push('/')
    }
  }, [])

  const { register, handleSubmit } = useForm<Inputs>()

  const handleRegister: SubmitHandler<Inputs> = async (data) => {
    createUser(data)
      .then((res) => {
        setUser({
          email: data.email,
          name: data.name,
          id: res.data.userID,
          token: res.data.token,
        })
        toast('Você foi cadastrado, aguarde...')
        router.push('/account/register')
      })
      .catch(() => {
        toast.error(`Ocorreu um erro! Tente novamente mais tarde!`, {
          theme: 'dark',
        })
      })
  }

  return (
    <Page>
      <div className={styles.containerRegister}>
        <div className="w-full">
          <div className="text-center mb-4 font-heading">
            <Heading>Cadastro</Heading>
            <Text className="text-gray400">
              Precisamos de poucas informações para criar sua conta.
            </Text>
          </div>

          <Card className={styles.card}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className={styles.inputWrapper}>
                <Text size="sm">E-mail</Text>
                <Input type="text" {...register('email')} />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Username</Text>
                <Input type="text" {...register('username')} />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Nome</Text>
                <Input type="text" {...register('name')} />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Telefone</Text>
                <Input
                  placeholder="(**) *****-****"
                  type="text"
                  {...register('phone')}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Senha</Text>
                <Input type="password" {...register('password')} />
              </div>
              <Button variant="outline">Cadastrar</Button>
            </form>
          </Card>
        </div>
      </div>
    </Page>
  )
}

export default UserRegister
