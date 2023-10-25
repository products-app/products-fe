import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown from '../index'

const dropdownItems = [
  {
    label: 'Meus pedidos',
    link: '/user/orders',
  },
  {
    label: 'Fazer logout',
    link: '/users/logout',
    icon: <div />,
  },
]
describe('Loading component', () => {
  it('should render correctly', () => {
    const { container } = render(<Dropdown />)
    expect(container).toMatchSnapshot()
  })

  it('should render dropdown with items', () => {
    render(<Dropdown items={dropdownItems} />)
    expect(screen.getByText('Meus pedidos')).toBeInTheDocument()
  })

  it('should click the button to open dropdown', async () => {
    render(<Dropdown items={dropdownItems} />)

    const handleClick = jest.fn()
    const buttonElement = screen.getByRole('button')
    buttonElement.addEventListener('click', handleClick, false)

    await userEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalled()
  })
})
