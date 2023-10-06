import Sidebar from '@/components/Sidebar'
import List, { ListItem } from '@/components/List'
import { Text } from '@lebernardo/react'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '@/helpers/products'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { setOpen } from '@/store/slices/sidebar'
import { decrementItem, incrementItem, removeItem } from '@/store/slices/cart'

const EmptyCart = () => (
  <div className="flex justify-center flex-col items-center h-5/6 overflow-hidden">
    <img
      className="w-full px-8"
      src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart.png"
      alt="empty cart"
    />
    <Text className="text-gray500">Adicione algo em seu carrinho...</Text>
  </div>
)

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { cartProducts, open } = useAppSelector((state) => {
    return {
      cartProducts: state.cart.items,
      open: state.sidebarControl.open,
    }
  })

  const countCartItems = Object.keys(cartProducts).length

  const handleCloseSidebar = () => {
    dispatch(setOpen(false))
  }

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
    <Sidebar isOpen={open} onClose={handleCloseSidebar}>
      <Text size="xl" className="mb-5">
        Carrinho de compras
      </Text>
      {cartProducts && countCartItems > 0 && (
        <List>
          {Object.entries(cartProducts).map(([key, value], i) => (
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
      )}
      {countCartItems === 0 && <EmptyCart />}
    </Sidebar>
  )
}

export default CartSidebar
