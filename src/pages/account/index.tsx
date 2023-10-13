import { Heading, Text, Card, Button } from '@lebernardo/react'
import Page from '@/components/Page'
import { useForm, SubmitHandler } from 'react-hook-form'
import { login } from '@/api/user'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useUserStore } from '@/store/user'
import styles from './styles'
import { useEffect } from 'react'

type Inputs = {
  email: string
  password: string
}

function UserLogin() {
  const router = useRouter()
  const userToken = useUserStore((state) => state.userToken)
  const setToken = useUserStore((state) => state.setToken)

  useEffect(() => {
    if (userToken) {
      router.push('/')
    }
  }, [])

  const { register, handleSubmit } = useForm<Inputs>()

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    login(data)
      .then((res) => {
        console.log(res.data.id)
        setToken(data.email, res.data.name, res.data.id)
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
                  <input
                    type="text"
                    {...register('email')}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <Text size="sm">Senha</Text>
                  <input
                    type="password"
                    {...register('password')}
                    className={styles.input}
                  />
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
