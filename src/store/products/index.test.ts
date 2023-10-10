import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useStore as store } from './index'
import * as productsApi from '../../api/products'

vi.mock('../../api/products')

const exampleProductsState = [
  {
    id: 6,
    name: 'product test',
    image: 'https://source.unsplash.com/random?product=2',
    price: 99.9,
    stock: 1,
    active: true,
  },
]

const newProduct = {
  id: 8,
  name: 'soda can',
  image: 'https://source.unsplash.com/random?product=4',
  price: 11,
  stock: 9,
  active: true,
}

const initialState = store.getState()

describe('products store', () => {
  beforeEach(() => {
    store.setState({ ...initialState, products: exampleProductsState })
  })

  it('should load the products by api', async () => {
    productsApi.getProducts = vi
      .fn()
      .mockResolvedValue({ data: exampleProductsState })

    const { loadData } = store.getState()
    await loadData('')
    const { products } = store.getState()

    expect(products.length).toEqual(1)
  })

  it('should add a new product', () => {
    const { add } = store.getState()
    add(newProduct)
    const { products } = store.getState()

    expect(products.length).toEqual(2)
  })
})
