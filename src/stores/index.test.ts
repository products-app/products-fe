import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useStore } from '@/stores'

const initialState = useStore.getState()

describe('Store: cart', () => {
  const mockItem = {
    id: 30,
    name: 'Product 2',
    image: 'https://source.unsplash.com/random?product=2',
    price: 49.9,
    stock: 10,
    quantity: 1,
  }

  beforeEach(() => {
    useStore.setState({ ...initialState, items: [] }, true)
  })

  it('should initiate the state correctly', () => {
    const { result } = renderHook(() => useStore())

    const initialState = result.current.items

    expect(initialState).toStrictEqual([])
  })

  it('should add item in cart correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
    })

    const cartItems = result.current.items

    expect(cartItems).toContainEqual(mockItem)
  })

  it('should increase the quantity correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
      result.current.increaseItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)
    expect(cartItems).toContainEqual({ ...mockItem, quantity: 2 })
  })

  it('should add another quantity to the item correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
      result.current.increaseItem(mockItem)
      result.current.increaseItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)
    expect(cartItems).toContainEqual({ ...mockItem, quantity: 3 })
  })

  it('should decrease one less quantity in the item correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
      result.current.addItem(mockItem)
      result.current.decreaseItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)
    expect(cartItems).toContainEqual({ ...mockItem, quantity: 1 })
  })

  it('should not decrease one less quantity in the item correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
      result.current.decreaseItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)
    expect(cartItems).toContainEqual({ ...mockItem, quantity: 1 })
  })

  it('should remove an item correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)

    act(() => {
      result.current.removeItem(mockItem)
    })

    const itemsNewState = result.current.items
    expect(itemsNewState?.length).toEqual(0)
  })

  it('should remove all items from the cart correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.addItem(mockItem)
    })

    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)

    act(() => {
      result.current.resetCart()
    })

    const itemsNewState = result.current.items
    expect(itemsNewState?.length).toEqual(0)
  })
})

describe('Store: user', () => {
  const mockUser = {
    id: 1,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    name: 'Maria Costa',
    email: 'example@gmail.com',
  }

  beforeEach(() => {
    useStore.setState({ ...initialState, user: undefined }, true)
  })

  it('should initiate the state correctly', () => {
    const { result } = renderHook(() => useStore())

    const initialState = result.current.user

    expect(initialState).toStrictEqual(undefined)
  })

  it('should assign the user correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setUser(mockUser)
    })

    const user = result.current.user

    expect(user).toEqual(mockUser)
  })

  it('should clear the user correctly', () => {
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setUser(mockUser)
    })

    const user = result.current.user
    expect(user).toEqual(mockUser)

    act(() => {
      result.current.resetUser()
    })

    const updatedUser = result.current.user
    expect(updatedUser).toEqual(undefined)
  })
})

describe('Store: app', () => {
  const mockAppControl = {
    searchTerm: '',
    openSidebar: false,
    openCheckout: false,
  }

  beforeEach(() => {
    useStore.setState({ ...initialState, ...mockAppControl }, true)
  })

  it('should initiate the states correctly', () => {
    const { result } = renderHook(() => useStore())

    const initialSearchTerm = result.current.searchTerm
    const initialOpenSidebar = result.current.openSidebar
    const initialOpenCheckout = result.current.openCheckout

    expect(initialSearchTerm).toStrictEqual('')
    expect(initialOpenSidebar).toStrictEqual(false)
    expect(initialOpenCheckout).toStrictEqual(false)
  })

  it('should add a search term correctly', () => {
    const searchString = 'Product 1'
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setSearch(searchString)
    })

    const searchTerm = result.current.searchTerm

    expect(searchTerm).toEqual(searchString)
  })

  it('should set the sidebar as open correctly', () => {
    const open = true
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setOpenSidebar(open)
    })

    const openSidebar = result.current.openSidebar

    expect(openSidebar).toEqual(open)
  })

  it('should set the modal checkout as open correctly', () => {
    const open = true
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setOpenCheckout(open)
    })

    const openCheckout = result.current.openCheckout

    expect(openCheckout).toEqual(open)
  })

  it('should clear all the application controls correctly', () => {
    const newState = {
      searchTerm: 'Product 2',
      openSidebar: true,
      openCheckout: true,
    }
    const { result } = renderHook(() => useStore())

    act(() => {
      result.current.setSearch(newState.searchTerm)
      result.current.setOpenSidebar(newState.openSidebar)
      result.current.setOpenCheckout(newState.openCheckout)
    })

    const { searchTerm, openSidebar, openCheckout } = result.current

    expect({ searchTerm, openSidebar, openCheckout }).toEqual(newState)

    act(() => {
      result.current.resetApp()
    })

    expect(result.current.searchTerm).toEqual(mockAppControl.searchTerm)
    expect(result.current.openSidebar).toEqual(mockAppControl.openSidebar)
    expect(result.current.openCheckout).toEqual(mockAppControl.openCheckout)
  })
})
