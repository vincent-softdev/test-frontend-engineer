'use client';

import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.product.id} className="border-b p-4 flex justify-between items-center">
              <div>
                <h2 className="font-bold">{item.product.title}</h2>
                <p>${item.product.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item.product)}
              >
                Remove
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
