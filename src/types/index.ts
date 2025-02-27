export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
// Setup cart item type
export interface ICartItem {
    product: IProduct;
    quantity: number;
  };