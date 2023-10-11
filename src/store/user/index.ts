import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IUser {
  userToken: string | undefined
  userName: string | undefined
  setToken: (token: string, name: string) => void
  deleteToken: () => void
}

const useUserStore = create(
  persist<IUser>(
    (set) => ({
      userName: undefined,
      userToken: undefined,
      referredName: 'userToken',
      setToken: (token: string, name: string) => {
        set({ userToken: token, userName: name })
      },
      deleteToken: () => {
        set({ userToken: undefined, userName: undefined })
      },
    }),
    {
      name: 'userToken',
    },
  ),
)

export { useUserStore }
