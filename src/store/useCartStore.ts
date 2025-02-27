import { create } from 'zustand';
import { IProduct } from '@/types';

type CartItem = {
  product: IProduct;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],

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

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      cart: quantity > 0
        ? state.cart.map((item) =>
            item.product.id === id ? { ...item, quantity } : item
          )
        : state.cart.filter((item) => item.product.id !== id), // Remove if quantity is 0
    }));
  },

  clearCart: () => set({ cart: [] }),
}));
