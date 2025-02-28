'use client';

import { useCartStore } from '@/store/useCartStore';
import { useRouter } from "next/navigation";

// 🚀 Component to Show Cart Summary (Total & Checkout)
const CartSummary = () => {
  const { cart } = useCartStore();
  const router = useRouter();

  // ✅ Calculate Total Price
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="mt-6">
      <p className="font-bold text-2xl">Total: ${totalPrice.toFixed(2)}</p>
      <div className="flex gap-4">
        <button 
          onClick={() => router.push("/checkout")} 
          className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600 transition"
        >
          Proceed to Checkout
        </button>
        <button 
          onClick={() => router.push("/")} 
          className="bg-blue-300 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
