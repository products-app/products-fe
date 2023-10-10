import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const findCartItem = (items: object, newItem: app.Product) =>
  Object.entries(items).find(([key, item]) => item.id === newItem.id && key)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {
      '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d': {
        id: 222,
        name: 'leg warmers',
        image: 'https://source.unsplash.com/random?product=',
        price: 49.9,
        quantity: 1,
        stock: 10,
      },
    },
  },
  reducers: {
    addItem: (state, action) => {
      const uuid = uuidv4()
      const founded = findCartItem(state.items, action.payload)

      if (founded) {
        const key = founded[0]
        state.items[key].quantity += 1
        return
      }

      state.items = {
        ...state.items,
        [uuid]: {
          ...action.payload,
          quantity: 1,
        },
      }
    },
    removeItem(state, action) {
      const uuid: string = action.payload
      delete state.items[uuid]
    },
    incrementItem(state, action) {
      const uuid: string = action.payload
      state.items[uuid].quantity += 1
    },
    decrementItem(state, action) {
      const uuid: string = action.payload
      if (state.items[uuid].quantity > 1) {
        state.items[uuid].quantity -= 1
      }
    },
  },
})

export const cart = cartSlice.reducer
export const { addItem, removeItem, decrementItem, incrementItem } =
  cartSlice.actions
