declare module app {
  export interface Product {
    id?: number
    name: string
    image?: string
    price: number
    stock: number
    active?: boolean
    description?: string
  }

  export interface CartItem extends Product {
    quantity: number
  }

  export interface DropdownItem {
    label: string
    link: string
    icon?: React.ReactNode
    onClick?: () => void
  }

  export interface OrderProduct {
    product_id: number
    price: number
    quantity: number
  }

  export interface Order {
    userID: number
    total: number
    orderProducts: OrderProduct[]
  }

  export interface UserAuth {
    id: number
    token: string
    name: string
    email?: string
  }

  export interface AppState {
    searchTerm?: string
    openSidebar?: boolean
    openCheckout?: boolean
  }

  export interface IAppControl extends AppState {
    setSearch: (searchTerm: string) => void
    setOpenSidebar: (open: boolean) => void
    setOpenCheckout: (open: boolean) => void
    resetApp: () => void
  }

  export interface CartState {
    items?: app.CartItem[]
  }

  export interface ICart extends CartState {
    addItem: (item: app.Product) => void
    removeItem: (item: app.CartItem) => void
    increaseItem: (item: app.CartItem) => void
    decreaseItem: (item: app.CartItem) => void
    resetCart: () => void
  }

  export interface UserState {
    user?: app.UserAuth
  }

  export interface IUser extends UserState {
    setUser: (loggedUser: app.UserAuth) => void
    resetUser: () => void
  }

  export interface CartSidebarActions {
    removeItem: (item: app.CartItem) => void
    increaseItem: (item: app.CartItem) => void
    decreaseItem: (item: app.CartItem) => void
  }
}
