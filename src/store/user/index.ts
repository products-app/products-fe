import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IUser {
  userToken: string | undefined
  name: string | undefined
  setToken: (token: string, name: string) => void
}

const useUserStore = create(
  persist<IUser>(
    (set) => ({
      name: undefined,
      userToken: undefined,
      referredName: 'userToken',
      setToken: (token: string, name: string) => {
        set({ userToken: token, name })
      },
    }),
    {
      name: 'userToken',
    },
  ),
)

export { useUserStore }
