import api from './index'
import { AxiosResponse } from 'axios'

export const getProducts = (search: string): Promise<AxiosResponse> => {
  return api.get('/products', {
    params: {
      search,
    },
  })
}

export const getProductByID = (id: number): Promise<AxiosResponse> =>
  api.get(`/products/${id}`)

export const postProducts = (
  data: Record<string, any>,
): Promise<AxiosResponse> => {
  return api.post('/products', data)
}

export const putProducts = (
  id: number,
  data: Record<string, any>,
): Promise<AxiosResponse> => {
  return api.put(`/products/${id}`, data)
}
