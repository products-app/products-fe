import { LoadingContainer, LoadingIcon, TextContainer } from './styles'

type LoadingProps = {
  message?: string
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <TextContainer size="lg">{message}</TextContainer>
    </LoadingContainer>
  )
}

const defaultProps = {
  message: 'Carregando, aguarde...',
}

Loading.defaultProps = defaultProps
export default Loading
