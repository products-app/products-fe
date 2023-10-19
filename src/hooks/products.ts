import { useQuery } from 'react-query'
import { getProducts } from '@/api/products'

const fetchProduct = async (searchTerm: string): Promise<app.Product[]> => {
  const { data } = await getProducts(searchTerm || '')
  return data
}

export function useGetProduct(searchTerm: string | undefined) {
  return useQuery<app.Product[], Error>(
    ['products'],
    () => fetchProduct(searchTerm || ''),
    {
      refetchOnWindowFocus: false,
    },
  )
}
