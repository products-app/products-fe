import api from './index'

export const getProducts = (search: string) => {
  return api.get('/products', {
    params: {
      search,
    },
  })
}
