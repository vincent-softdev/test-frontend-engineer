export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

// Setup cart item type
export interface ICartItem {
    product: Product;
    quantity: number;
  };