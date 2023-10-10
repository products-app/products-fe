import { create } from 'zustand'

export interface ISearch {
  searchTerm: string
  setSearch: (searchTerm: string) => void
}

const useSearchStore = create<ISearch>((set, get) => ({
  setSearch: (searchTerm: string) => {
    set({ searchTerm })
  },
  searchTerm: '',
}))

export { useSearchStore }
