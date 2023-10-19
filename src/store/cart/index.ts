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
  truncateItems: () => void
}

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cartItems: {},
      referredName: 'cartItems',
      addItem: (item: app.Product) => {
        let cartItems = get().cartItems
        const uuid = uuidv4()
        const founded = findCartItem(cartItems, item)

        if (founded) {
          const key = founded[0]
          cartItems[key].quantity += 1
          set({
            cartItems,
          })
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
        delete cartItems[uuid]
        set({
          cartItems,
        })
      },
      incrementItem(uuid: string) {
        set((state) => ({
          ...state.cartItems,
          [uuid]: {
            ...state.cartItems[uuid],
            quantity: state.cartItems[uuid]?.quantity
              ? (state.cartItems[uuid].quantity += 1)
              : 0,
          },
        }))
      },
      decrementItem(uuid: string) {
        const cartItems = get().cartItems
        if (cartItems[uuid]?.quantity && cartItems[uuid].quantity > 1) {
          cartItems[uuid].quantity -= 1
        }
        set({
          cartItems,
        })
      },
      truncateItems() {
        set({
          cartItems: {},
        })
      },
    }),
    {
      name: 'cartItems',
    },
  ),
)
