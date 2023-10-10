export const countCartItems = (cartItems: app.CartItems): number => {
  return Object.keys(cartItems).length
}
