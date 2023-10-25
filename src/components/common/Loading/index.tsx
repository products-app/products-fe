import { css } from '@lebernardo/react'
import { LoadingContainer, LoadingIcon, TextContainer } from './styles'

type LoadingProps = {
  message?: string
  css?: typeof css
}

const Loading = ({ message, css }: LoadingProps) => {
  return (
    <LoadingContainer css={{ css }}>
      <LoadingIcon />
      {message && <TextContainer size="lg">{message}</TextContainer>}
    </LoadingContainer>
  )
}

const defaultProps = {
  message: undefined,
  css: '',
}

Loading.defaultProps = defaultProps
export default Loading
