import { render, screen } from '@testing-library/react'
import List, { ListItem } from '../index'

const content = <div>Test</div>

describe('List component', () => {
  it('should render correctly', () => {
    const { container } = render(<List>{content}</List>)

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })
})

describe('List Item component', () => {
  it('should render correctly', () => {
    const { container } = render(<List>{content}</List>)

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })
})

describe('List and List Item components', () => {
  it('should render both components correctly', () => {
    const { container } = render(
      <List>
        <ListItem>{content}</ListItem>
      </List>,
    )

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(() => screen.getByText('no exist')).toThrow()

    const ulElement = screen.getByRole('list')
    expect(ulElement).toBeInTheDocument()
    const liElement = screen.getByRole('listitem')
    expect(liElement).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
