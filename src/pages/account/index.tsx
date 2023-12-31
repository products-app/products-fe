import { Heading, Text, Card, Button } from '@lebernardo/react'
import Page from '@/components/common/Page'
import { useForm, SubmitHandler } from 'react-hook-form'
import { login } from '@/api/user'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useStore } from '@/stores'
import styles, { Input } from './styles'
import { useEffect } from 'react'

type Inputs = {
  email: string
  password: string
}

function UserLogin() {
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

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    login(data)
      .then((res) => {
        const userAuth = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          token: res.data.token,
        } as app.UserAuth
        setUser(userAuth)
        toast('Você está logado, redirecionando...')
        router.push('/')
      })
      .catch(() => {
        toast.error(`Ocorreu um erro! Tente novamente mais tarde!`, {
          theme: 'dark',
        })
      })
  }

  const goToRegister = () => {
    router.push('/account/register')
  }

  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.col2}>
          <div className="w-full">
            <div className="text-center mb-4 font-heading">
              <Heading>Login</Heading>
              <Text className="text-gray400">Faça login para comprar.</Text>
            </div>

            <Card className={styles.card}>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className={styles.inputWrapper}>
                  <Text size="sm">E-mail</Text>
                  <Input type="text" {...register('email')} />
                </div>

                <div className={styles.inputWrapper}>
                  <Text size="sm">Senha</Text>
                  <Input type="password" {...register('password')} />
                </div>
                <Button type="submit">Login</Button>
              </form>
            </Card>
          </div>
          <div className="w-full">
            <div className="text-center mb-4 font-heading">
              <Heading>Cadastro</Heading>
              <Text className="text-gray400">
                Precisamos de poucas informações para criar sua conta.
              </Text>
            </div>

            <Card className={styles.card}>
              <Button type="button" variant="outline" onClick={goToRegister}>
                Cadastrar
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default UserLogin
