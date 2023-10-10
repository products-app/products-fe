import { create } from 'zustand'
import { getProducts } from '@/api/products'

export interface IProducts {
  products: app.Product[]
  loadData: (search: string) => void
}

const useStore = create<IProducts>((set, get) => ({
  loadData: async (search: string) => {
    try {
      const response = await getProducts(search)
      set({ products: response.data })
    } catch {
      // Todo show error
    }
  },
  products: [],
}))

export { useStore }
