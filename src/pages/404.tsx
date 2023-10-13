import { LinkBreak } from 'phosphor-react'
import { Heading, Text, Button } from '@lebernardo/react'
import styles from '@/styles/notFound'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  
  const redirectToPageIndex = () => {
    router.push('/')
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
