import { LinkBreak } from 'phosphor-react'
import { Heading, Text } from '@lebernardo/react'
import styles from './styles'

const Page = () => (
  <div className={styles.container}>
    <LinkBreak className={styles.iconNotFound} />
    <Heading size="lg" className={styles.heading}>
      404 - Página não encontrada
    </Heading>
    <Text size="lg" className={styles.textDescription}>
      Tente recarregar a página ou tentar mais tarde
    </Text>
  </div>
)

export default Page
