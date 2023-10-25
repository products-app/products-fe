import { useStore } from '@/stores'
import { getProductStock } from '@/helpers/products'

const useProduct = () => {
  const { addItem, cartItems } = useStore((state) => ({
    addItem: state.addItem,
    cartItems: state.items,
  }))

  const handleAddToCart = (product: app.Product) => {
    addItem(product)
  }

  const isDisabledAddToCart = (product: app.Product) => {
    const isMaxStockLimit = !!(
      cartItems &&
      cartItems.find(
        (item: app.CartItem) =>
          item.id === product.id && item.quantity >= product.stock,
      )
    )

    return (
      isMaxStockLimit ||
      getProductStock(product.stock) === 0 ||
      product.price === 0
    )
  }

  return {
    handleAddToCart,
    isDisabledAddToCart,
  }
}

export { useProduct }
