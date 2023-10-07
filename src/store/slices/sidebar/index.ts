import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload
    },
  },
})

export const sidebar = sidebarSlice.reducer
export const { setOpen } = sidebarSlice.actions
