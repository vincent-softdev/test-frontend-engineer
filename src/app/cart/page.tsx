'use client';

import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from "next/navigation";
import { FiTrash2 } from 'react-icons/fi';

// Cart page
const CartPage = () => {
  // Access cart store to get Cart infor from state, removeFromCart and updateQuantity
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* 🚀 Let load all Cart item if cart is not empty */}
      {cart.length === 0 ? (
        <>
           <p className="text-xl text-gray-500">Your cart is empty.</p>
           <button onClick={() => router.push("/")} className="bg-blue-300 cursor-pointer text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition">
              Continue Shopping
            </button>
        </>
      ) : (
        <div className="pt-10 pb-10">
          {/* List of cart items */}
          {cart.map((item) => (
            // 🚀 Cart Item compound component
            <CartItem key={item.product.id}>
              <CartItem.Image src={item.product.image} alt={item.product.title} />
              
              <div className='flex w-full justify-between'>
                <CartItem.Info
                  title={item.product.title} 
                  price={item.product.price} 
                  quantity={item.quantity} 
                  rating={item.product.rating}
                  onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                  onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                >
                  <CartItem.Category category={item.product.category} />
                </CartItem.Info>

                <CartItem.Actions>
                  <button
                    className="text-red-500 cursor-pointer w-10 h-10 hover:text-red-700"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label="Remove item"
                  >
                    <FiTrash2 className="w-full h-full" />
                  </button>
                </CartItem.Actions>
              </div>
            </CartItem>
          ))}
          {/* 🛠 Move to Checkout */}
          <div className="mt-6">
            <p className="font-bold text-2xl">Total: ${totalPrice.toFixed(2)}</p>
            <div className='flex gap-4'>
              <button onClick={() => router.push("/checkout")} className="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
              <button onClick={() => router.push("/")} className="bg-blue-300 cursor-pointer text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 transition">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
