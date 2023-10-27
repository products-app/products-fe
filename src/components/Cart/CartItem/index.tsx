import Image from 'next/image'
import { Text } from '@lebernardo/react'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal, getProductImage } from '@/helpers/products'
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

type CartItemProps = {
  item: app.CartItem
  increaseItem: (item: app.CartItem) => void
  decreaseItem: (item: app.CartItem) => void
  removeItem: (item: app.CartItem) => void
}

const CartItem = ({
  item,
  increaseItem,
  decreaseItem,
  removeItem,
}: CartItemProps) => {
  return (
    <>
      <ContainerImg>
        <Image
          src={getProductImage(item.image)}
          alt={item.name}
          width={0}
          height={0}
          sizes="100vw"
        />
      </ContainerImg>

      <ContainerText>
        <Text size="sm">{item.name}</Text>
        <TextQuantity size="xs">
          Qtde:{' '}
          <strong data-cy="item-quantity" aria-label="item-quantity">
            {item.quantity}
          </strong>
        </TextQuantity>
      </ContainerText>

      <ContainerControls>
        <TextPrice>{formatDecimalToReal(item.price * item.quantity)}</TextPrice>
        <ContainerQuantityControl>
          <ButtonQuantityMinus
            data-cy="decrease-item"
            onClick={() => decreaseItem(item)}
            disabled={item.quantity === 1}
          >
            <Minus />
          </ButtonQuantityMinus>
          <ButtonQuantityPlus
            data-cy="increase-item"
            onClick={() => increaseItem(item)}
            disabled={item.quantity === item.stock}
          >
            <Plus />
          </ButtonQuantityPlus>
        </ContainerQuantityControl>
      </ContainerControls>

      <ContainerControls>
        <ButtonRemoveProduct onClick={() => removeItem(item)}>
          <TrashSimple />
        </ButtonRemoveProduct>
      </ContainerControls>
    </>
  )
}

export default CartItem
