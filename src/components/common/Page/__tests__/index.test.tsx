import { render, screen } from '@testing-library/react'
import Page from '../index'

describe('Loading component', () => {
  it('should render correctly', () => {
    const { container } = render(<Page>Test</Page>)

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
