'use client';

import { useCart } from '@/context/CartContext';
import { FiTrash2 } from "react-icons/fi";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='pt-10 pb-10'>
          {cart.map((item) => (
            <div key={item.product.id} className="border-b p-4 flex justify-between items-center">
                <div className='flex gap-10'>
                    <img className='h-[100px]' src={item.product.image} alt={item.product.title} />
                    <div className='flex flex-col justify-between'>
                        <h2 className="font-bold text-2xl">{item.product.title}</h2>
                        <p className='text-2xl'>${item.product.price.toFixed(2)}</p>
                        <p className='text-[20px]'>Quantity: {item.quantity}</p>
                    </div>
                </div>
                <button
                    className="text-red-500 cursor-pointer w-10 h-10"
                    onClick={() => removeFromCart(item.product)}
                >
                    <FiTrash2 className='w-full h-full'/>
                </button>
            </div>
          ))}
          <p className="font-bold text-xl mt-4">Total: ${totalPrice.toFixed(2)}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
