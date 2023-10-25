'use client'
import Modal from 'react-modal'
import { X as CloseIcon } from 'phosphor-react'
import { CloseButton } from './styles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#e1e1e1',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: '9999',
  },
}

Modal.setAppElement('body')

type ModalContainerProps = {
  children: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

const ModalContainer = ({ children, open, setOpen }: ModalContainerProps) => {
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={open || false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Checkout"
      >
        <CloseButton aria-label="close-modal" onClick={closeModal}>
          <CloseIcon />
        </CloseButton>

        {children}
      </Modal>
    </div>
  )
}

const defaultProps = {
  children: <></>,
  open: false,
}

ModalContainer.defaultProps = defaultProps
export default ModalContainer
