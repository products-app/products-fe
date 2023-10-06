import Sidebar from '@/components/Sidebar'
import List, { ListItem } from '@/components/List'
import { Text } from '@lebernardo/react'
import { Minus, Plus, TrashSimple } from 'phosphor-react'
import { formatDecimalToReal } from '@/helpers/products'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { setOpen } from '@/store/slices/sidebar'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { cartProducts, open } = useAppSelector((state) => {
    return {
      cartProducts: state.cart.products,
      open: state.sidebarControl.open,
    }
  })

  const handleCloseSidebar = () => {
    dispatch(setOpen(false))
  }

  return (
    <Sidebar isOpen={open} onClose={handleCloseSidebar}>
      <Text size="xl" className="mb-5">
        Carrinho de compras
      </Text>
      <List>
        {cartProducts.map((product, i) => (
          <ListItem key={i}>
            <figure className="bg-gray600 rounded-lg w-36 h-13 overflow-hidden">
              <img
                className="object-cover w-auto h-auto aspect-square"
                src={`https://source.unsplash.com/random?product=${i}`}
                alt=""
              />
            </figure>
            <div className="whitespace-nowrap overflow-hidden w-full">
              <Text size="md">{product.name}</Text>
              <Text size="sm" className="text-gray400">
                Qtde: <strong>1</strong>
              </Text>
            </div>
            <div className="text-right">
              <Text className="text-base300 font-bold">
                {formatDecimalToReal(99.9)}
              </Text>
              <div className="flex mt-2 justify-end">
                <button className="bg-gray-700 p-1">
                  <Minus className="text-white text-xs" />
                </button>
                <button className="bg-gray-800 p-1">
                  <Plus className="text-white text-xs" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <button className="p-2 hover:bg-gray800 rounded-full">
                <TrashSimple className="text-gray200 hover:text-white" />
              </button>
            </div>
          </ListItem>
        ))}
      </List>
    </Sidebar>
  )
}

export default CartSidebar
