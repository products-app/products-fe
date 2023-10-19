import { LinkBreak } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import {
  Container,
  HeadingContainer,
  TextContainer,
  ButtonContainer,
} from '@/styles/notFound'

const Page = () => {
  const router = useRouter()

  const redirectToPageIndex = () => {
    router.push('/')
  }

  return (
    <Container>
      <LinkBreak />
      <HeadingContainer>404 - Página não encontrada</HeadingContainer>
      <TextContainer>
        Tente recarregar a página ou tentar mais tarde
      </TextContainer>

      <ButtonContainer variant="outline" onClick={redirectToPageIndex}>
        Voltar para página inicial
      </ButtonContainer>
    </Container>
  )
}

export default Page
