export type Category = "Todos" | "Hamburguesas" | "Alitas" | "Hot Dogs" | "Papas" | "Bebidas";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  emoji: string;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes: string;
}
