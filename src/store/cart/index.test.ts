import { useCartStore as store } from './index'

const key = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const exampleState = {
  [key]: {
    id: 22,
    name: 'Product 1',
    image: 'https://source.unsplash.com/random?product=1',
    price: 49.9,
    quantity: 2,
    stock: 3,
  },
}

const newItem = {
  id: 30,
  name: 'Product 2',
  image: 'https://source.unsplash.com/random?product=2',
  price: 49.9,
  quantity: 1,
  stock: 10,
}

const initialState = store.getState()

describe('cart store', () => {
  beforeEach(() => {
    store.setState({ ...initialState, cartItems: exampleState })
  })

  it('should add a new item in the cart', () => {
    const { addItem } = store.getState()
    addItem(newItem)
    const { cartItems } = store.getState()

    expect(Object.keys(cartItems).length).toEqual(2)
  })

  it('should increment the quantity in item of the cart', () => {
    const { addItem } = store.getState()
    addItem({
      ...newItem,
      id: 22,
    })
    const { cartItems } = store.getState()

    expect(Object.keys(cartItems).length).toEqual(1)
    expect(cartItems[key].quantity).toEqual(3)
  })

  it('should be able to increment one more quantity in item of the cart', () => {
    const { incrementItem } = store.getState()
    incrementItem(key)

    const { cartItems } = store.getState()

    expect(cartItems[key].quantity).toEqual(4)
  })

  it('should be able to decrement one quantity in item of the cart', () => {
    const { decrementItem } = store.getState()
    decrementItem(key)
    const { cartItems } = store.getState()

    expect(cartItems[key].quantity).toEqual(3)
  })

  it('should remove a item of the cart', () => {
    const { removeItem } = store.getState()
    removeItem(key)

    const { cartItems } = store.getState()
    expect(Object.keys(cartItems).length).toEqual(0)
  })
})
