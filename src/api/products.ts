import api from './index'
import { AxiosResponse } from 'axios'

export const getProducts = (search: string): Promise<AxiosResponse> => {
  return api.get('/products', {
    params: {
      search,
    },
  })
}
