import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CheckoutModal from '../CheckoutModal'
import { useStore } from '@/stores'

const initialState = useStore.getState()

describe('Checkout Modal component', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<CheckoutModal />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should render correctly with open checkout modal', () => {
    useStore.setState({ ...initialState, openCheckout: true }, true)
    const { baseElement } = render(<CheckoutModal />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should call the toggle modal function', async () => {
    useStore.setState({ ...initialState, openCheckout: true }, true)
    render(<CheckoutModal />)

    const handleClick = jest.fn()
    const buttonCloseElement = screen.getByRole('button', {
      name: 'close-modal',
      hidden: true,
    })
    buttonCloseElement.addEventListener('click', handleClick, false)

    await userEvent.click(buttonCloseElement)

    expect(handleClick).toHaveBeenCalled()
  })
})
