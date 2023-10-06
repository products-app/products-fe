declare module app {
  export interface Product {
    id?: number;
    name: string;
    image: string;
    price: number;
  }

  export interface BadgeVariants {
    [key: string]: string;
  }
}
