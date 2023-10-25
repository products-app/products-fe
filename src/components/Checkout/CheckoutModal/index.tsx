'use client'
import { useStore } from '@/stores'
import Modal from '@/components/common/Modal'
import Checkout from '../CheckoutContainer'

const CheckoutModal = () => {
  const { openCheckout, setOpenCheckout } = useStore((state) => ({
    openCheckout: state.openCheckout,
    setOpenCheckout: state.setOpenCheckout,
  }))

  function toggleModalCheckout(open: boolean) {
    setOpenCheckout(open)
  }

  return (
    <Modal open={openCheckout} setOpen={toggleModalCheckout}>
      <Checkout />
    </Modal>
  )
}

export default CheckoutModal
