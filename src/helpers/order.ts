import { orderStatus } from '@/constants/order_types'

const getOrderStatus = (status: string) => {
  if (status in orderStatus) {
    return orderStatus[status]
  } else {
    return orderStatus.canceled
  }
}

export { getOrderStatus }
