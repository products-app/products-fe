import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IUser {
  userToken: string | undefined
  userName: string | undefined
  userID: number | undefined
  setToken: (token: string, name: string, userID: number) => void
  deleteToken: () => void
}

const useUserStore = create(
  persist<IUser>(
    (set) => ({
      userName: undefined,
      userToken: undefined,
      userID: undefined,
      referredName: 'userToken',
      setToken: (token: string, name: string, id: number) => {
        console.log("user", id)
        set({ userToken: token, userName: name, userID: id })
      },
      deleteToken: () => {
        set({ userToken: undefined, userName: undefined, userID: undefined })
      },
    }),
    {
      name: 'userToken',
    },
  ),
)

export { useUserStore }
