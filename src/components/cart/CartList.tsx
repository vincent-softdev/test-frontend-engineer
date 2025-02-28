'use client';

import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/useCartStore';
import { FiTrash2 } from 'react-icons/fi';

// 🚀 Component to List Cart Items
const CartList = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <CartItem key={item.product.id}>
          <CartItem.Image src={item.product.image} alt={item.product.title} />

          <div className="flex w-full justify-between">
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
    </div>
  );
};

export default CartList;
