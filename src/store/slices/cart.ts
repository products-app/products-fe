import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        name: 'leg warmers',
        image: 'https://source.unsplash.com/random?product=',
        price: 49.9,
        quantity: 1,
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload)
    },
  },
})

export const cart = cartSlice.reducer
export const { addToCart } = cartSlice.actions
