import { create } from 'zustand';
import { ICartItem, IProduct } from '@/types';

// ✅ Same, I will not separate this to other type cause it only used for Cart Store
type CartState = {
  cart: ICartItem[];
  cartCount: number; // ✅ Now properly updates
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  cartCount: 0, // ✅ Initial state

  addToCart: (product, quantity) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, { product, quantity }];
      }

      return {
        cart: updatedCart,
        cartCount: updatedCart.reduce((total, item) => total + item.quantity, 0), // ✅ Updates cart count dynamically
      };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.product.id !== id);

      return {
        cart: updatedCart,
        cartCount: updatedCart.reduce((total, item) => total + item.quantity, 0), // ✅ Updates dynamically
      };
    });
  },

  updateQuantity: (id, quantity) => {
    set((state) => {
      let updatedCart;

      if (quantity > 0) {
        updatedCart = state.cart.map((item) =>
          item.product.id === id ? { ...item, quantity } : item
        );
      } else {
        updatedCart = state.cart.filter((item) => item.product.id !== id); // ✅ Remove if quantity is 0
      }

      return {
        cart: updatedCart,
        cartCount: updatedCart.reduce((total, item) => total + item.quantity, 0), // ✅ Updates dynamically
      };
    });
  },

  clearCart: () => set({ cart: [], cartCount: 0 }), // ✅ Reset count when cart is cleared
}));
