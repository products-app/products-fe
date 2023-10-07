import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import List, { ListItem } from '../index'

const content = <div>Test</div>

describe('List component', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<List>{content}</List>)

    expect(getByText('Test')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })
})

describe('List Item component', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<List>{content}</List>)

    expect(getByText('Test')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()
    expect(container).toMatchSnapshot()
  })
})

describe('List and List Item components', () => {
  it('should render both components correctly', () => {
    const { container, getByText, getByRole } = render(
      <List>
        <ListItem>{content}</ListItem>
      </List>,
    )

    expect(getByText('Test')).toBeDefined()
    expect(() => getByText('no exist')).toThrow()

    const ulElement = getByRole('list')
    expect(ulElement).toBeInTheDocument()
    const liElement = getByRole('listitem')
    expect(liElement).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
