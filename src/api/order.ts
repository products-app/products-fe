import api from './index'
import { AxiosResponse } from 'axios'

export const getOrders = (
  search: string,
  token: string | undefined,
): Promise<AxiosResponse> => {
  return api.get('/orders', {
    params: {
      search,
    },
    headers: { authorization: token },
  })
}

export const getOrderByUser = (
  userID: number,
  token: string | undefined,
): Promise<AxiosResponse> =>
  api.get(`/orders/${userID}`, { headers: { authorization: token } })

export const postOrder = (
  data: Record<string, any>,
  token: string | undefined,
): Promise<AxiosResponse> => {
  return api.post('/orders', data, { headers: { authorization: token } })
}

export const putOrder = (
  id: number,
  data: Record<string, any>,
  token: string | undefined,
): Promise<AxiosResponse> => {
  return api.put(`/orders/${id}`, data, { headers: { authorization: token } })
}
