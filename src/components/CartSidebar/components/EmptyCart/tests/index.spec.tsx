import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import EmptyCart from '../index'

describe('Empty Card component', () => {
  it('should render correctly', () => {
    const { container } = render(<EmptyCart />)
    expect(container).toMatchSnapshot()
  })

  it('should contain the empty cart message', () => {
    const { getByText } = render(<EmptyCart />)
    expect(getByText('Adicione algo em seu carrinho...')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()
  })

  it('should contain the empty cart image', () => {
    render(<EmptyCart />)
    const emptyCardImage = screen.getByRole('img')
    expect(emptyCardImage).toHaveAttribute('src', '/empty_cart.png')
    expect(emptyCardImage).toHaveAttribute('alt')
  })
})
