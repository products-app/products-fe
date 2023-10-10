import { describe, expect, it } from 'vitest'
import { products as reducer, add } from './index'

const exampleState = [
  {
    id: 6,
    name: 'controller',
    image: 'https://source.unsplash.com/random?product=2',
    price: 99.9,
    stock: 1,
    active: true,
  },
]

const newProduct = {
  product: {
    id: 8,
    name: 'soda can',
    image: 'https://source.unsplash.com/random?product=4',
    price: 11,
    stock: 9,
    active: true,
  },
}

describe('products slice', () => {
  it('should add a new product', () => {
    const state = reducer(exampleState, add(newProduct))

    expect(state.length).toEqual(2)
  })
})
