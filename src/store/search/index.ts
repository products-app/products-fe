import { create } from 'zustand'

export interface ISearch {
  searchTerm: string
  setSearch: (searchTerm: string) => void
}

const useSearchStore = create<ISearch>((set) => ({
  setSearch: (searchTerm: string) => {
    set({ searchTerm })
  },
  searchTerm: '',
}))

export { useSearchStore }
