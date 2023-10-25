import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from '../index'

const props = {
  searchTerm: '',
  handleChange: jest.fn(),
  placeholder: 'test placeholder',
}

const mockSearchValue = 'Product 1'

describe('Search component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should render correctly', () => {
    const { container } = render(<SearchInput {...props} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test('should change search input value and press enter', async () => {
    render(<SearchInput {...props} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, mockSearchValue)

    await userEvent.keyboard('{Enter}')

    expect(input).toHaveValue(mockSearchValue)
  })

  test('should change search input value and press backspace', async () => {
    render(<SearchInput {...props} />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, 'a')

    await userEvent.keyboard('{Backspace}')

    expect(input).toHaveValue('')
  })
})
