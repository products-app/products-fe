import { LinkBreak } from 'phosphor-react'
import { Heading, Text, Button } from '@lebernardo/react'
import styles from './styles'
import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate()

  const redirectToPageIndex = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <LinkBreak className={styles.iconNotFound} />
      <Heading size="lg">404 - Página não encontrada</Heading>
      <Text size="lg" className={styles.textDescription}>
        Tente recarregar a página ou tentar mais tarde
      </Text>

      <Button
        variant="outline"
        className={styles.buttonAction}
        onClick={redirectToPageIndex}
      >
        Voltar para página inicial
      </Button>
    </div>
  )
}

export default Page
