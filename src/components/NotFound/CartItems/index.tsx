import { defaultImages } from '@/constants/images'
import { Container, TextContainer } from './styles'

const NotFoundCartItems = () => (
  <Container>
    <img
      src={defaultImages.emptyCart}
      alt="Imagem de carrinho vazio"
    />
    <TextContainer>Adicione algo em seu carrinho...</TextContainer>
  </Container>
)

export default NotFoundCartItems
