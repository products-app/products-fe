import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartItem from '../CartItem/index'

const props = {
  item: {
    id: 1,
    name: 'Product 1',
    price: 29.9,
    stock: 10,
    quantity: 3,
  },
  increaseItem: jest.fn(),
  decreaseItem: jest.fn(),
  removeItem: jest.fn(),
}

describe('Cart Item component', () => {
  test('should render correctly', () => {
    const { container } = render(<CartItem {...props} />)

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })

  test('should click on increase quantity button', async () => {
    render(<CartItem {...props} />)

    const handleClick = jest.fn()
    const increaseButtonElement = screen.getAllByRole('button')[1]
    increaseButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(increaseButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })

  test('should click on decrease quantity button', async () => {
    render(<CartItem {...props} />)

    const handleClick = jest.fn()
    const decreaseButtonElement = screen.getAllByRole('button')[0]
    decreaseButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(decreaseButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })

  test('should remove an item correctly', async () => {
    render(<CartItem {...props} />)

    const handleClick = jest.fn()
    const decreaseButtonElement = screen.getAllByRole('button')[2]
    decreaseButtonElement.addEventListener('click', handleClick, false)

    await userEvent.click(decreaseButtonElement)

    expect(handleClick).toHaveBeenCalled()
  })
})
