import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

const findCartItem = (items: object, newItem: app.Product) =>
  Object.entries(items).find(([key, item]) => item.id === newItem.id && key)

type State = {
  cartItems: app.CartItems
}

type Actions = {
  addItem: (cartItem: app.Product) => void
  removeItem: (uuid: string) => void
  incrementItem: (uuid: string) => void
  decrementItem: (uuid: string) => void
}

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cartItems: {},
      addItem: (item: app.Product) => {
        let cartItems = get().cartItems
        const uuid = uuidv4()
        const founded = findCartItem(cartItems, item)

        if (founded) {
          const key = founded[0]
          cartItems[key].quantity += 1
          return
        }

        cartItems = {
          ...cartItems,
          [uuid]: {
            ...item,
            quantity: 1,
          },
        }
        set({
          cartItems,
        })
      },
      removeItem(uuid: string) {
        const cartItems = get().cartItems
        try {
          delete cartItems[uuid]
          set({
            cartItems,
          })
        } catch {
          // Todo show error
        }
      },
      incrementItem(uuid: string) {
        const cartItems = get().cartItems
        cartItems[uuid].quantity += 1
        set({
          cartItems,
        })
      },
      decrementItem(uuid: string) {
        const cartItems = get().cartItems
        if (cartItems[uuid].quantity > 1) {
          cartItems[uuid].quantity -= 1
        }
        set({
          cartItems,
        })
      },
    }),
    {
      name: 'cartItems',
    },
  ),
)
