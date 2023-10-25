import { ArchiveBox } from 'phosphor-react'
import { Container, HeadingContainer, TextContainer } from './styles'

const NotFoundOrders = () => (
  <Container>
    <ArchiveBox />
    <HeadingContainer size="lg">Não há pedidos disponíveis</HeadingContainer>
    <TextContainer size="lg">
      Tente recarregar a página ou tentar mais tarde
    </TextContainer>
  </Container>
)

export default NotFoundOrders
