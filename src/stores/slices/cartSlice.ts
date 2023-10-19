/* eslint-disable @typescript-eslint/no-explicit-any */
const actionTypes = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
}

const defaultState = {
  items: [],
}

const updateCartItems = (
  items: app.CartItem[],
  newItem: app.Product | app.CartItem,
  actionType: string,
) => {
  const index = items.findIndex((item) => item.id === newItem.id)

  if (index === -1) {
    items.push({
      ...newItem,
      quantity: 1,
    })
    return items
  }

  switch (actionType) {
    case actionTypes.increase:
      if (items[index].quantity + 1 <= items[index].stock)
        items[index].quantity += 1
      break
    case actionTypes.decrease:
      if (items[index].quantity > 1) items[index].quantity -= 1
      break
  }

  return items
}

const createCartSlice = (
  set: (partial: app.CartState) => void,
  get: () => any,
) => ({
  ...defaultState,
  addItem: (item: app.Product) => {
    set({
      items: updateCartItems(get().items, item, actionTypes.increase),
    })
  },
  increaseItem(item: app.CartItem) {
    set({
      items: updateCartItems(get().items, item, actionTypes.increase),
    })
  },
  decreaseItem(item: app.CartItem) {
    set({
      items: updateCartItems(get().items, item, actionTypes.decrease),
    })
  },
  removeItem(item: app.CartItem) {
    const items = get().items
    const index = items.indexOf(item)

    if (index > -1) {
      items.splice(index, 1)
      set({ items })
    }
  },
  reset: () => {
    set(defaultState)
  },
})

export { createCartSlice }
