/* eslint-disable @typescript-eslint/no-unused-vars */
const countCartItems = (cartItems: app.CartItem[]): number => {
  return cartItems.length
}

const getTotal = (
  items: app.CartItem[],
): [error: string | undefined, total: number] => {
  try {
    if (countCartItems(items) === 0) {
      throw new Error('the shopping cart is empty')
    }

    const total = items.reduce((total, item) => {
      if (isNaN(item?.price) || isNaN(item?.quantity)) {
        throw new Error(`the item ${item?.name || ''} is invalid`)
      }
      return item?.price * item?.quantity + total
    }, 0)

    return [undefined, parseFloat(total.toFixed(2))]
  } catch (err) {
    let errorMsg = ''
    if (err instanceof Error) errorMsg = err.message
    return [errorMsg, 0]
  }
}

const cartToOrderItems = (
  items: app.CartItem[],
): app.OrderProduct[] | undefined => {
  try {
    if (countCartItems(items) === 0) {
      throw new Error('the shopping cart is empty')
    }

    const orderProducts = items.flatMap((item) => ({
      product_id: item?.id || 0,
      price: item?.price || 0,
      quantity: item?.quantity || 0,
    }))

    return orderProducts
  } catch (err) {
    return undefined
  }
}

export { countCartItems, getTotal, cartToOrderItems }
