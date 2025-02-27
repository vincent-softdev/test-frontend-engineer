import { ReactNode } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

type CartItemProps = {
  children?: ReactNode;
};

const CartItem = ({ children }: CartItemProps) => {
  return (
    <div className="border-b p-4 flex flex-col gap-4">
      <div className="flex gap-4">{children}</div>
    </div>
  );
};

/* Image Component */
CartItem.Image = ({ src, alt }: { src: string; alt: string }) => (
  <img className="h-[140px] w-[100px] object-cover rounded-md" src={src} alt={alt} />
);

/* Info Component */
CartItem.Info = ({ title, price, quantity, rating, onIncrease, onDecrease, children }: { 
  title: string; 
  price: number; 
  quantity: number;
  rating: { rate: number; count: number }; 
  onIncrease: () => void;
  onDecrease: () => void;
  children?: ReactNode; 
}) => (
  <div className="flex flex-col justify-between">
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-lg font-bold flex items-center">
      ${price.toFixed(2)} <span className="text-sm text-gray-600 ml-2">x {quantity}</span>
    </p>
    <CartItem.Rating rate={rating.rate} count={rating.count} />
    <div className="flex gap-2">{children}</div>

    {/* Quantity Controls */}
    <div className="flex items-center gap-2 mt-2">
      <button
        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
        onClick={onDecrease}
      >
        <FiMinus />
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
        onClick={onIncrease}
      >
        <FiPlus />
      </button>
    </div>
  </div>
);

/* Rating Component */
CartItem.Rating = ({ rate, count }: { rate: number; count: number }) => (
  <div className="flex items-center text-sm text-gray-600">
    ⭐ {rate} ({count} reviews)
  </div>
);

/* Category Component */
CartItem.Category = ({ category }: { category: string }) => (
  <span className="bg-gray-200 text-xs font-bold px-2 py-1 rounded-md text-gray-700">
    {category.toUpperCase()}
  </span>
);

/* Actions Component */
CartItem.Actions = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center">{children}</div>
);

export default CartItem;
