import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IUser {
  userToken: string | undefined
  userName: string | undefined
  userID: number | undefined
  setToken: (user: app.UserAuth) => void
  deleteToken: () => void
}

const useUserStore = create(
  persist<IUser>(
    (set) => ({
      userName: undefined,
      userToken: undefined,
      userID: undefined,
      referredName: 'userToken',
      setToken: (user: app.UserAuth) => {
        set({ userToken: user.token, userName: user.name, userID: user.id })
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
