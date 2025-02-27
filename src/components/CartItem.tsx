import { ICartItem } from '@/types';
import { FiTrash2 } from 'react-icons/fi';

type CartItemProps = {
  item: ICartItem;
  removeFromCart: (id: number) => void;
};

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  return (
    <div className="border-b p-4 flex justify-between items-center">
      <div className="flex gap-10">
        <img
          className="h-[100px] w-[100px] object-cover rounded-md"
          src={item.product.image}
          alt={item.product.title}
        />
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-2xl">{item.product.title}</h2>
          <p className="text-2xl">${item.product.price.toFixed(2)}</p>
          <p className="text-lg">Quantity: {item.quantity}</p>
        </div>
      </div>

      <button
        className="text-red-500 cursor-pointer w-10 h-10 hover:text-red-700"
        onClick={() => removeFromCart(item.product.id)}
        aria-label="Remove item"
      >
        <FiTrash2 className="w-full h-full" />
      </button>
    </div>
  );
};

export default CartItem;
