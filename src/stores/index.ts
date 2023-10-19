import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { createUserSlice } from './slices/userSlice'
import { createCartSlice } from './slices/cartSlice'
import { createAppSlice } from './slices/appSlice'

export const useStore = create(
  devtools(
    persist<app.ICart & app.IUser & app.IAppControl>(
      (set, get) => ({
        ...createUserSlice(set),
        ...createCartSlice(set, get),
        ...createAppSlice(set),
      }),
      {
        name: 'store',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: 'store',
      enabled: true,
    },
  ),
)
