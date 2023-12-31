import api from './index'
import { AxiosResponse } from 'axios'

export const login = (data: Record<string, any>): Promise<AxiosResponse> => {
  return api.post('/users/login', data)
}

export const createUser = (
  data: Record<string, any>,
): Promise<AxiosResponse> => {
  return api.post('/users', data)
}

export const getUserOrders = (
  id: number,
  token: string | undefined,
): Promise<AxiosResponse> => {
  return api.get(`/users/${id}/orders`, { headers: { authorization: token } })
}
