import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import HeaderContainer from '../HeaderContainer'

describe('Header Container component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should render correctly', () => {
    const { container } = render(<HeaderContainer />)

    expect(screen.getByText('Prompt')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  test('should change search input value', async () => {
    render(<HeaderContainer />)

    const input = screen.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, 'test')
    await userEvent.keyboard('{Enter}')

    expect(input).toHaveValue('test')
  })
})
