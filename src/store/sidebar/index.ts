import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  open: boolean
  openCheckout: boolean
}

type Actions = {
  setOpen: (open: boolean) => void
  setOpenCheckout: (open: boolean) => void
}

export const useSidebarStore = create(
  persist<State & Actions>(
    (set) => ({
      open: false,
      openCheckout: false,
      setOpen(open: boolean) {
        set({
          open,
        })
      },
      setOpenCheckout(openCheckout: boolean) {
        set({
          openCheckout,
        })
      },
    }),
    {
      name: 'sidebar',
    },
  ),
)
