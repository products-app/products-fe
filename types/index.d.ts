declare module app {
  export interface Product {
    id?: number;
    name: string;
    image: string;
    price: number;
    stock: number;
    quantity: number;
  }

  export interface cartItem {
    [uuid: string]: Product;
  }

  export interface BadgeVariants {
    [key: string]: string;
  }
}
