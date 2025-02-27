'use client';

import { useCartStore } from '@/store/useCartStore';
import { FiTrash2 } from "react-icons/fi";

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="pt-10 pb-10">
          {cart.map((item) => (
            <div key={item.product.id} className="border-b p-4 flex justify-between items-center">
              <div className="flex gap-10">
                {/* Product Image */}
                <img className="h-[100px] w-[100px] object-cover rounded-md" src={item.product.image} alt={item.product.title} />

                {/* Product Info */}
                <div className="flex flex-col justify-between">
                  <h2 className="font-bold text-2xl">{item.product.title}</h2>
                  <p className="text-2xl">${item.product.price.toFixed(2)}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="text-red-500 cursor-pointer w-10 h-10 hover:text-red-700"
                onClick={() => removeFromCart(item.product.id)}
              >
                <FiTrash2 className="w-full h-full" />
              </button>
            </div>
          ))}

          {/* Total Price & Checkout */}
          <div className="mt-6">
            <p className="font-bold text-2xl">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
