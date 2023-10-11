import { Heading, Text, Card, Button } from '@lebernardo/react'
import Page from '@/components/Page'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createUser } from '@/api/user'
import { useUserStore } from '@/root/src/store/user'
import { toast } from 'react-toastify'
import styles from './styles'
import { useEffect } from 'react'

type Inputs = {
  name: string
  email: string
  password: string
  phone: string
  username: string
}

function UserRegister() {
  const navigate = useNavigate()
  const userToken = useUserStore((state) => state.userToken)
  const setToken = useUserStore((state) => state.setToken)

  useEffect(() => {
    if (userToken) {
      navigate('/')
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const handleRegister: SubmitHandler<Inputs> = async (data) => {
    createUser(data)
      .then(() => {
        setToken(data.email, data.name)
        toast('Você foi cadastrado, aguarde...')
        navigate('/register')
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
                <input
                  type="text"
                  {...register('email')}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Username</Text>
                <input
                  type="text"
                  {...register('username')}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Nome</Text>
                <input
                  type="text"
                  {...register('name')}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Text size="sm">Telefone</Text>
                <input
                  placeholder="(**) *****-****"
                  type="text"
                  {...register('phone')}
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
              <Button variant="outline">Cadastrar</Button>
            </form>
          </Card>
        </div>
      </div>
    </Page>
  )
}

export default UserRegister
