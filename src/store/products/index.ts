import { create } from 'zustand'
import { getProducts } from '@/api/products'

export interface IProducts {
  products: app.Product[]
  loadData: (search: string) => void
  add: (product: app.Product) => void
}

const useStore = create<IProducts>((set, get) => ({
  loadData: async (search: string) => {
    const response = await getProducts(search)
    set({ products: response.data })
  },
  add: (product: app.Product) => {
    const products = get().products
    products.push(product)
    set({ products })
  },
  products: [],
}))

export { useStore }
