import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useStore } from '@/stores'
import HeaderControl from '../HeaderControl'

const userMock = {
  id: 1,
  name: 'Pedro',
  token: 'eyJhbGciOiJSUzI1NiIsIng1dCI6Ij',
}

const cartItemsMock = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.9,
    stock: 10,
    quantity: 3,
  },
]

const initialState = useStore.getState()

describe('Header Control component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should render correctly', () => {
    const { container } = render(<HeaderControl />)

    expect(screen.getAllByRole('button')[0]).toBeDefined()
    expect(container).toMatchSnapshot()
  })

  test('should render correctly when user is logged', () => {
    useStore.setState(
      { ...initialState, user: userMock, items: cartItemsMock },
      true,
    )
    const { container } = render(<HeaderControl />)

    expect(screen.getAllByRole('button')[0]).toBeDefined()
    expect(container).toMatchSnapshot()
  })

  test('should click to open the cart sidebar', async () => {
    render(<HeaderControl />)

    const handleClick = jest.fn()
    const toggleSidebarButton = screen.getByRole('button', {
      name: 'button-toggle-sidebar',
    })

    toggleSidebarButton.addEventListener('click', handleClick, false)
    await userEvent.click(toggleSidebarButton)

    expect(handleClick).toHaveBeenCalled()
  })

  test('should redirect to login page', async () => {
    useStore.setState(
      { ...initialState, user: undefined, items: undefined },
      true,
    )
    render(<HeaderControl />)

    const handleClick = jest.fn()
    const toggleSidebarButton = screen.getByRole('button', {
      name: 'button-redirect-login',
    })

    toggleSidebarButton.addEventListener('click', handleClick, false)
    await userEvent.click(toggleSidebarButton)

    expect(handleClick).toHaveBeenCalled()
  })
})
