import api from './index'
import { AxiosResponse } from 'axios'

export const getOrders = (search: string): Promise<AxiosResponse> => {
  return api.get('/orders', {
    params: {
      search,
    },
  })
}

export const getOrderByUser = (userID: number): Promise<AxiosResponse> =>
  api.get(`/orders/${userID}`)

export const postOrder = (
  data: Record<string, any>,
): Promise<AxiosResponse> => {
  return api.post('/orders', data)
}

export const putOrder = (
  id: number,
  data: Record<string, any>,
): Promise<AxiosResponse> => {
  return api.put(`/orders/${id}`, data)
}
