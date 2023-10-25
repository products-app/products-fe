import { render, screen } from '@testing-library/react'
import Sidebar from '../index'

const content = <div>Test</div>
const props = {
  onClose: () => {},
  isOpen: false,
}

describe('Sidebar component', () => {
  it('should render correctly', () => {
    const { container } = render(<Sidebar {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should contain text in sidebar content', () => {
    render(
      <Sidebar {...props} isOpen={true}>
        {content}
      </Sidebar>,
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
  })
})
