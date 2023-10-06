export const countCartItems = (cartItems: app.cartItem): number => {
  return Object.keys(cartItems).length
}
