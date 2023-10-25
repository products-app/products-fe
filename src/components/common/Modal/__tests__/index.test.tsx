import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '../index'
import React from 'react'

const props = {
  open: true,
  setOpen: jest.fn(),
}

describe('Modal component', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Modal {...props} />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should click the close button correctly', async () => {
    render(
      <Modal {...props}>
        <div>test</div>
      </Modal>,
    )

    expect(screen.getByText('test')).toBeInTheDocument()
    const modalWindow = screen.getByRole('dialog', { hidden: true })
    expect(modalWindow).toBeInTheDocument()

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
