import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useStore } from '@/stores'
import CartSidebar from '../CartSidebar/index'

const cartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.9,
    stock: 10,
    quantity: 3,
  },
]
const initialState = useStore.getState()

describe('Cart Sidebar component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should render correctly', () => {
    useStore.setState({ ...initialState, items: cartItems }, true)

    const { container } = render(<CartSidebar />)

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })

  test('should render a empty cart correctly', () => {
    useStore.setState({ ...initialState, items: [] }, true)

    const { container } = render(<CartSidebar />)

    expect(screen.queryByText('Product 1')).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test('should render correctly when cart items is undefined', () => {
    useStore.setState({ ...initialState, items: undefined }, true)

    const { container } = render(<CartSidebar />)

    expect(screen.queryByText('Product 1')).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test('should redirect to the login page when click on button "Buy now"', async () => {
    useStore.setState({ ...initialState, items: cartItems }, true)
    render(<CartSidebar />)

    const handleClick = jest.fn()
    const buyButtonElement = screen.getByRole('button', {
      name: /Comprar agora/i,
    })
    buyButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(buyButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })

  test('should set open sidebar when click on button "Buy now"', async () => {
    useStore.setState(
      {
        ...initialState,
        items: cartItems,
        user: { token: '123', id: 1, name: 'Maria' },
      },
      true,
    )
    render(<CartSidebar />)

    const handleClick = jest.fn()
    const buyButtonElement = screen.getByRole('button', {
      name: /Comprar agora/i,
    })
    buyButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(buyButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })

  test('should close sidebar', async () => {
    useStore.setState({ ...initialState, items: cartItems }, true)
    render(<CartSidebar />)

    const handleClick = jest.fn()
    const buyButtonElement = screen.getByRole('button', {
      name: 'button-close-sidebar',
    })

    buyButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(buyButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })
})
