import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { cart, products, sidebar } from './slices'

export const store = configureStore({
  reducer: {
    cart,
    products,
    sidebarControl: sidebar,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
