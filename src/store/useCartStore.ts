import { create } from 'zustand';
import { ICartItem, Product } from '@/types';

// Setup cart state
type CartState = {
  cart: ICartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  // We need a function to add to cart
  addToCart: (product, quantity) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { product, quantity }] };
      }
    });
  },
  // Now remove from cart by item id
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== id),
    }));
  },

  // We should allow user to clear the cart
  clearCart: () => set({ cart: [] }),

  // We need to calculate cart count
  get cartCount() {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },
}));
