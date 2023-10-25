import List, { ListItem } from '@/components/common/List'
import CartItem from '@/components/Cart/CartItem'

type CartListProps = {
  items?: app.CartItem[]
  actions: app.CartSidebarActions
}

const CartList = ({ items, actions }: CartListProps) => {
  return (
    <List>
      {items &&
        items.map((item, i) => (
          <ListItem key={i}>
            <CartItem item={item} {...actions} />
          </ListItem>
        ))}
    </List>
  )
}

const defaultProps = {
  items: [],
}

CartList.defaultProps = defaultProps
export default CartList
