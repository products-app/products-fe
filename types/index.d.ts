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

  export interface CartItems {
    [uuid: string]: CartItem
  }

  export interface BadgeVariants {
    [key: string]: string
  }

  export interface DropdownItem {
    label: string
    link: string
    icon?: React.ReactNode
    onClick?: () => void
  }
}
