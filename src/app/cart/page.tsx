'use client';

import { useCartStore } from '@/store/useCartStore';
import { useRouter } from "next/navigation";
import CartList from '@/components/cart/CartList';
import CartSummary from '@/components/cart/CartSummary';

// 🚀 Main Cart Page
const CartPage = () => {
  const { cart } = useCartStore();
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* 🚀 If the cart is empty, show message */}
      {cart.length === 0 ? (
        <>
          <p className="text-xl text-gray-500">Your cart is empty.</p>
          <button 
            onClick={() => router.push("/")} 
            className="bg-blue-300 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>
        </>
      ) : (
        <div className="pt-10 pb-10">
          {/* ✅ Render Cart Items */}
          <CartList />
          
          {/* ✅ Render Cart Summary */}
          <CartSummary />
        </div>
      )}
    </div>
  );
};

export default CartPage;
