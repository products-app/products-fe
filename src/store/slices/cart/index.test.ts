import { describe, expect, it } from 'vitest'
import {
  cart as reducer,
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
} from './index'

const key = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const exampleState = {
  items: {
    [key]: {
      id: 22,
      name: 'Produto 1',
      image: 'https://source.unsplash.com/random?product=1',
      price: 49.9,
      quantity: 2,
      stock: 3,
    },
  },
}

const newItem = {
  id: 30,
  name: 'Produto 1',
  image: 'https://source.unsplash.com/random?product=1',
  price: 49.9,
  quantity: 1,
  stock: 10,
}

describe('cart slice', () => {
  it('should add a new item in the cart', () => {
    const state = reducer(exampleState, addItem(newItem))

    expect(Object.keys(state.items).length).toEqual(2)
  })

  it('should increment the quantity in item of the cart', () => {
    const state = reducer(
      exampleState,
      addItem({
        ...newItem,
        id: 22,
      }),
    )

    expect(Object.keys(state.items).length).toEqual(1)
    expect(state.items[key].quantity).toEqual(3)
  })

  it('should remove a item of the cart', () => {
    const state = reducer(exampleState, removeItem(key))

    expect(Object.keys(state.items).length).toEqual(0)
  })

  it('should be able to increment one more quantity in item of the cart', () => {
    const state = reducer(exampleState, incrementItem(key))

    expect(state.items[key].quantity).toEqual(3)
  })

  it('should be able to decrement one quantity in item of the cart', () => {
    const productIdentifier = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const state = reducer(exampleState, decrementItem(productIdentifier))

    expect(state.items[productIdentifier].quantity).toEqual(1)
  })
})
