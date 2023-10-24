import { render, screen } from '@testing-library/react'
import Loading from '../index'

describe('Loading component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })

  it('should contain a loading message', () => {
    render(<Loading message="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
  })
})
