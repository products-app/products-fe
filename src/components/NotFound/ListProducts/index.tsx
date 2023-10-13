import { Package } from 'phosphor-react'
import { Container, HeadingContainer, TextContainer } from './styles'

const NotFoundProducts = () => (
  <Container>
    <Package />
    <HeadingContainer size="lg">
      Não há produtos disponíveis
    </HeadingContainer>
    <TextContainer size="lg">
      Tente recarregar a página ou tentar mais tarde
    </TextContainer>
  </Container>
)

export default NotFoundProducts
