import { defaultImages } from '@/constants/images'
import { Container, TextContainer } from './styles'
import Image from 'next/image'

const NotFoundCartItems = () => (
  <Container>
    <Image
      src={defaultImages.emptyCart}
      alt="Imagem de carrinho vazio"
      width={0}
      height={0}
      sizes="100vw"
    />
    <TextContainer>Adicione algo em seu carrinho...</TextContainer>
  </Container>
)

export default NotFoundCartItems
