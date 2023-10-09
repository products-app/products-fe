type ListProps = {
  children: React.ReactNode
}

const ListItem = ({ children }: ListProps) => (
  <li className="flex gap-4 py-3 justify-between border-t-2 border-gray-700 border-solid">
    {children}
  </li>
)

const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>
}

export default List
export { ListItem }
