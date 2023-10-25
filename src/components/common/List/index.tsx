// TO DO: move to the design system
import { LiContainer } from './styles'

type ListProps = {
  children: React.ReactNode
}

const ListItem = ({ children }: ListProps) => (
  <LiContainer>{children}</LiContainer>
)

const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>
}

export default List
export { ListItem }
