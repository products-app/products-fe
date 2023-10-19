const defaultState = {
  searchTerm: '',
  openSidebar: false,
  openCheckout: false,
}

export const createAppSlice = (set: (partial: app.AppState) => void) => ({
  ...defaultState,
  setSearch: (searchTerm: string) => {
    set({ searchTerm })
  },
  setOpenSidebar(openSidebar: boolean) {
    set({ openSidebar })
  },
  setOpenCheckout(openCheckout: boolean) {
    set({ openCheckout })
  },
  reset: () => {
    set(defaultState)
  },
})
