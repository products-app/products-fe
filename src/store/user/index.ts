import { create } from 'zustand'

export interface IUser {
  userToken: string | undefined
  setToken: (token: string) => void
}

const useUserStore = create<IUser>((set) => ({
  setToken: (token: string) => {
    set({ userToken: token })
  },
  userToken: undefined,
}))

export { useUserStore }
