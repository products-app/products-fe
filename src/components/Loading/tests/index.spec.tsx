import Loading from '../index'
import { render, screen } from '@testing-library/react'

describe('Loading component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })

  it('should contain the loading default message', () => {
    render(<Loading />)
    expect(screen.getByText('Carregando, aguarde...')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
  })

  it('should contain the loading default message', () => {
    render(<Loading message="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
  })
})
