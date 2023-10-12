import Modal from 'react-modal'
import Checkout from './checkout'
import { X as CloseIcon } from 'phosphor-react'
import { useSyncExternalStore } from 'react'
import { useSidebarStore } from '@/root/src/store/sidebar'

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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
}

Modal.setAppElement('#root')

const CheckoutModal = () => {
  const sidebar = useSyncExternalStore(
    useSidebarStore.subscribe,
    useSidebarStore.getState,
  )
  const setOpenCheckout = useSidebarStore((state) => state.setOpenCheckout)

  function closeModal() {
    setOpenCheckout(false)
  }

  return (
    <div>
      <Modal
        isOpen={sidebar.openCheckout}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Checkout"
      >
        <div className="flex justify-end p-2 w-96">
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>

        <Checkout />
      </Modal>
    </div>
  )
}

export default CheckoutModal
