import { Text } from '@lebernardo/react'
import List, { ListItem } from '@/components/List'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal, getProductImage } from '@/helpers/products'
import { useStore } from '@/stores'
import Image from 'next/image'
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
  items?: app.CartItem[]
}

const ListCart = ({ items }: PageProps) => {
  const { decreaseItem, increaseItem, removeItem } = useStore((state) => ({
    decreaseItem: state.decreaseItem,
    increaseItem: state.increaseItem,
    removeItem: state.removeItem,
  }))

  const handleDecrementItem = (item: app.CartItem) => {
    decreaseItem(item)
  }

  const handleIncrementItem = (item: app.CartItem) => {
    increaseItem(item)
  }

  const handleRemoveItem = (item: app.CartItem) => {
    removeItem(item)
  }

  return (
    <List>
      {items &&
        items.map((value, i) => (
          <ListItem key={i}>
            <ContainerImg>
              <Image
                src={getProductImage(value.image)}
                alt={value.name}
                width={0}
                height={0}
                sizes="100vw"
              />
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
                  onClick={() => handleDecrementItem(value)}
                  disabled={value.quantity === 1}
                >
                  <Minus />
                </ButtonQuantityMinus>
                <ButtonQuantityPlus
                  data-cy="increment-item"
                  onClick={() => handleIncrementItem(value)}
                  disabled={value.quantity === value.stock}
                >
                  <Plus />
                </ButtonQuantityPlus>
              </ContainerQuantityControl>
            </ContainerControls>

            <ContainerControls>
              <ButtonRemoveProduct onClick={() => handleRemoveItem(value)}>
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
