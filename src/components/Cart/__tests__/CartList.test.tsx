import { render, screen } from '@testing-library/react'
import CartList from '../CartList'

const props = {
  items: [
    {
      id: 1,
      name: 'Product 1',
      price: 29.9,
      stock: 10,
      quantity: 3,
    },
  ],
  actions: {
    decreaseItem: jest.fn(),
    increaseItem: jest.fn(),
    removeItem: jest.fn(),
  },
}

describe('Cart List component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should render correctly', () => {
    const { container } = render(<CartList {...props} />)

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })
})
