import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: [
    {
      name: 'leg warmers',
      image: 'https://source.unsplash.com/random?product=1',
      price: 49.9,
      stock: 10,
    },
    {
      name: 'controller',
      image: 'https://source.unsplash.com/random?product=2',
      price: 99.9,
      stock: 1,
      active: true,
    },
    {
      name: 'towel',
      image: 'https://source.unsplash.com/random?product=3',
      price: 10,
      stock: 4,
      active: true,
    },
    {
      name: 'soda can',
      image: 'https://source.unsplash.com/random?product=4',
      price: 11,
      stock: 9,
      active: true,
    },
    {
      id: 5,
      name: 'leg warmers',
      image: 'https://source.unsplash.com/random?product=1',
      price: 49.9,
      stock: 10,
      active: true,
    },
    {
      id: 6,
      name: 'controller',
      image: 'https://source.unsplash.com/random?product=2',
      price: 99.9,
      stock: 1,
      active: true,
    },
    {
      id: 7,
      name: 'towel',
      image: 'https://source.unsplash.com/random?product=3',
      price: 10,
      stock: 4,
      active: true,
    },
    {
      id: 8,
      name: 'soda can',
      image: 'https://source.unsplash.com/random?product=4',
      price: 11,
      stock: 9,
      active: true,
    },
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.product)
    },
  },
})

export const products = productSlice.reducer
export const { add } = productSlice.actions
