import { SmileyXEyes } from 'phosphor-react'
import { Container, HeadingContainer, TextContainer } from './styles'

interface SearchProps {
  searchTerm?: string
}

const NotFoundSearch = ({ searchTerm }: SearchProps) => (
  <Container>
    <SmileyXEyes />
    <HeadingContainer size="lg">
      Nenhum resultado para:{' '}
      <span>{searchTerm}</span>
    </HeadingContainer>
    <TextContainer size="lg">
      Tente verificar a ortografia ou usar termos mais genéricos
    </TextContainer>
  </Container>
)

const defaultProps = {
  searchTerm: '',
}

NotFoundSearch.defaultProps = defaultProps
export default NotFoundSearch
