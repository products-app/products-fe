import { render } from '@testing-library/react'
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
    const { getByText } = render(
      <Sidebar {...props} isOpen={true}>
        {content}
      </Sidebar>,
    )
    expect(getByText('Test')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()
  })
})
