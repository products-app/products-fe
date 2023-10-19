const defaultState = {
  user: undefined,
}

export const createUserSlice = (set: (partial: app.UserState) => void) => ({
  ...defaultState,
  setUser: (loggedUser: app.UserAuth) => {
    set({ user: loggedUser })
  },
  resetUser: () => {
    set(defaultState)
  },
})
