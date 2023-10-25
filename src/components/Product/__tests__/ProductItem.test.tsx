import { render, screen, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductItem from '../ProductItem'
import { useStore } from '@/stores'

const productMock: app.Product = {
  id: 1,
  name: 'Product Test',
  price: 29.9,
  stock: 2,
}

describe('Product Item component', () => {
  it('should render correctly', () => {
    const { container } = render(<ProductItem product={productMock} />)

    expect(screen.getByText('Product Test')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should click to add product in the cart store', async () => {
    render(<ProductItem product={productMock} />)

    const handleClick = jest.fn()
    const buttonElement = screen.getByRole('button', {
      name: 'Adicionar ao carrinho',
    })
    buttonElement.addEventListener('click', handleClick, false)
    await userEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalled()

    const { result } = renderHook(() => useStore())
    const cartItems = result.current.items
    expect(cartItems?.length).toEqual(1)
  })
})
