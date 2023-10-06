import { Text } from '@lebernardo/react'

const EmptyCart = () => (
  <div className="flex justify-center flex-col items-center h-5/6 overflow-hidden">
    <img
      className="w-full px-8"
      src="empty_cart.png"
      alt="empty cart"
    />
    <Text className="text-gray500">Adicione algo em seu carrinho...</Text>
  </div>
)

export default EmptyCart
