import List, { ListItem } from '../../../List'
import { Text } from '@lebernardo/react'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '../../../../helpers/products'
import {
  decrementItem,
  incrementItem,
  removeItem,
} from '../../../../store/slices/cart'
import { useDispatch } from 'react-redux'

type PageProps = {
  items: app.cartItem
}

const ListCart = ({ items }: PageProps) => {
  const dispatch = useDispatch()

  const handleDecrementItem = (uuid: string) => {
    dispatch(decrementItem(uuid))
  }

  const handleIncrementItem = (uuid: string) => {
    dispatch(incrementItem(uuid))
  }

  const handleRemoveItem = (uuid: string) => {
    dispatch(removeItem(uuid))
  }

  return (
    <List>
      {Object.entries(items).map(([key, value], i) => (
        <ListItem key={i}>
          <figure className="bg-gray600 rounded-lg w-36 h-13 overflow-hidden">
            <img
              className="object-cover w-auto h-auto aspect-square"
              src={value.image}
              alt=""
            />
          </figure>
          <div className="whitespace-nowrap overflow-hidden w-full">
            <Text size="md">{value.name}</Text>
            <Text size="sm" className="text-gray400">
              Qtde: <strong>{value.quantity}</strong>
            </Text>
          </div>
          <div className="text-right">
            <Text className="text-base300 font-bold">
              {formatDecimalToReal(99.9)}
            </Text>
            <div className="flex mt-2 justify-end">
              <button
                className="bg-gray-700 p-1"
                onClick={() => handleDecrementItem(key)}
                disabled={value.quantity === 1}
              >
                <Minus className="text-white text-xs" />
              </button>
              <button
                className="bg-gray-800 p-1 disabled:"
                onClick={() => handleIncrementItem(key)}
                disabled={value.quantity === value.stock}
              >
                <Plus className="text-white text-xs" />
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              className="p-2 hover:bg-gray800 rounded-full"
              onClick={() => handleRemoveItem(key)}
            >
              <TrashSimple className="text-gray200 hover:text-white" />
            </button>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default ListCart
