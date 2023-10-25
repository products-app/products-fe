import { render, screen } from '@testing-library/react'
import ProductGrid from '../ProductGrid'

const productsMock: app.Product[] = [
  {
    id: 1,
    name: 'Product Test 1',
    price: 29.9,
    stock: 2,
  },
  {
    id: 2,
    name: 'Product Test 2',
    price: 34.9,
    stock: 10,
  },
]

describe('Product Item component', () => {
  it('should render correctly', () => {
    const { container } = render(<ProductGrid items={productsMock} />)

    expect(screen.getByText('Product Test 1')).toBeInTheDocument()
    expect(screen.getByText('Product Test 2')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
