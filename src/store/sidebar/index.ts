import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  open: boolean
}

type Actions = {
  setOpen: (open: boolean) => void
}

export const useSidebarStore = create(
  persist<State & Actions>(
    (set) => ({
      open: false,
      setOpen(open: boolean) {
        set({
          open,
        })
      },
    }),
    {
      name: 'sidebar',
    },
  ),
)
