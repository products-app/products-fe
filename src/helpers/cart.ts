export const countCartItems = (cartItems: app.CartProduct): number => {
  return Object.keys(cartItems).length
}
