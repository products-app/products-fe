import { Text } from '@lebernardo/react'
import List, { ListItem } from '@/components/List'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '@/helpers/products'
import { useCartStore } from '@/store/cart'
import useFromStore from '@/hooks/store'
import {
  ButtonQuantityPlus,
  ButtonQuantityMinus,
  ContainerImg,
  ContainerText,
  TextQuantity,
  ContainerControls,
  TextPrice,
  ButtonRemoveProduct,
  ContainerQuantityControl,
} from './styles'

type PageProps = {
  items?: app.CartItems
}

const ListCart = ({ items }: PageProps) => {
  const cart = useFromStore(useCartStore, (state) => state)

  const handleDecrementItem = (uuid: string) => {
    cart && cart?.decrementItem(uuid)
  }

  const handleIncrementItem = (uuid: string) => {
    cart && cart?.incrementItem(uuid)
  }

  const handleRemoveItem = (uuid: string) => {
    cart && cart?.removeItem(uuid)
  }

  return (
    <List>
      {items &&
        Object.entries(items).map(([key, value], i) => (
          <ListItem key={i}>
            <ContainerImg>
              <img src={value.image} alt={value.name} />
            </ContainerImg>

            <ContainerText>
              <Text size="sm">{value.name}</Text>
              <TextQuantity size="xs">
                Qtde: <strong data-cy="item-quantity">{value.quantity}</strong>
              </TextQuantity>
            </ContainerText>

            <ContainerControls>
              <TextPrice>
                {formatDecimalToReal(value.price * value.quantity)}
              </TextPrice>
              <ContainerQuantityControl>
                <ButtonQuantityMinus
                  data-cy="decrement-item"
                  name="minus"
                  onClick={() => handleDecrementItem(key)}
                  disabled={value.quantity === 1}
                >
                  <Minus />
                </ButtonQuantityMinus>
                <ButtonQuantityPlus
                  data-cy="increment-item"
                  onClick={() => handleIncrementItem(key)}
                  disabled={value.quantity === value.stock}
                >
                  <Plus />
                </ButtonQuantityPlus>
              </ContainerQuantityControl>
            </ContainerControls>

            <ContainerControls>
              <ButtonRemoveProduct onClick={() => handleRemoveItem(key)}>
                <TrashSimple />
              </ButtonRemoveProduct>
            </ContainerControls>
          </ListItem>
        ))}
    </List>
  )
}

const defaultProps = {
  items: [],
}

ListCart.defaultProps = defaultProps
export default ListCart
