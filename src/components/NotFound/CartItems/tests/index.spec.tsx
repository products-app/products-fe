import NotFoundCartItems from '../index'
import { render, screen } from '@testing-library/react'

describe('Not Found Cart Items component', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFoundCartItems />)
    expect(container).toMatchSnapshot()
  })

  it('should contain the not found cart items message', () => {
    render(<NotFoundCartItems />)
    expect(
      screen.getByText('Adicione algo em seu carrinho...'),
    ).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
  })

  it('should contain the not found cart items image', () => {
    render(<NotFoundCartItems />)
    const emptyCartImage = screen.getByRole('img')
    expect(emptyCartImage).toHaveAttribute('src')
    expect(emptyCartImage).toHaveAttribute('alt')
  })
})
