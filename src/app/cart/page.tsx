'use client';

import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { FiTrash2 } from 'react-icons/fi';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="pt-10 pb-10">
          {cart.map((item) => (
            <CartItem key={item.product.id}>
              {/* Product Image */}
              <CartItem.Image src={item.product.image} alt={item.product.title} />

              {/* Product Info with Quantity Controls */}
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

              {/* Product Actions */}
              <CartItem.Actions>
                <button
                  className="text-red-500 cursor-pointer w-10 h-10 hover:text-red-700"
                  onClick={() => removeFromCart(item.product.id)}
                  aria-label="Remove item"
                >
                  <FiTrash2 className="w-full h-full" />
                </button>
              </CartItem.Actions>
            </CartItem>
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
