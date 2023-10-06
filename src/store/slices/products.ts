import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: [
    {
      name: 'leg warmers',
      image: 'https://source.unsplash.com/random?product=',
      price: 49.9,
    },
    {
      name: 'controller',
      image: 'https://source.unsplash.com/random?product=',
      price: 99.9,
    },
    {
      name: 'towel',
      image: 'https://source.unsplash.com/random?product=',
      price: 10,
    },
    {
      name: 'soda can',
      image: 'https://source.unsplash.com/random?product=',
      price: 11,
    },
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.product)
    },
  },
})

export const products = productSlice.reducer
