import NotFoundCartItems from '../index'
import { render, screen } from '@testing-library/react'

describe('Not Found Cart Items component', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFoundCartItems />)
    expect(container).toMatchSnapshot()
  })

  it('should contain the not found cart items message', () => {
    const { getByText } = render(<NotFoundCartItems />)
    expect(getByText('Adicione algo em seu carrinho...')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()
  })

  it('should contain the not found cart items image', () => {
    render(<NotFoundCartItems />)
    const emptyCartImage = screen.getByRole('img')
    expect(emptyCartImage).toHaveAttribute('src', '/empty-cart.png')
    expect(emptyCartImage).toHaveAttribute('alt')
  })
})
