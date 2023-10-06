declare module app {
  export interface Product {
    id?: number;
    name: string;
    image: string;
    price: number;
    stock: string;
  }

  export interface CartProduct {
    [uuid: string]: Product;
  }

  export interface BadgeVariants {
    [key: string]: string;
  }
}
