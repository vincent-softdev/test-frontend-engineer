import { ReactNode, HTMLAttributes } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

/** 
 * ✅ SRP: CartItem is responsible only for layout. 
 * ✅ OCP: It can accept different child components dynamically.
 */
type CartItemProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

const CartItem = ({ children, className, ...props }: CartItemProps) => {
  return (
    <div className={`border-b p-4 flex flex-col gap-4 ${className}`} {...props}>
      <div className="flex gap-4">{children}</div>
    </div>
  );
};

/** 
 * ✅ SRP: Image component is responsible for displaying the product image. 
 */
CartItem.Image = ({ src, alt, className, ...props }: HTMLAttributes<HTMLImageElement> & { src: string; alt: string }) => (
  <img
    className={`h-[140px] object-fill rounded-md ${className}`}
    src={src}
    alt={alt}
    {...props}
  />
);

/** 
 * ✅ SRP: Info component handles displaying product details. 
 * ✅ ISP: It only accepts the props it actually needs.
 */
CartItem.Info = ({
  title,
  price,
  quantity,
  rating,
  onIncrease,
  onDecrease,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  title: string;
  price: number;
  quantity: number;
  rating: { rate: number; count: number };
  onIncrease: () => void;
  onDecrease: () => void;
  children?: ReactNode;
}) => (
  <div className={`flex flex-col justify-between ${className}`} {...props}>
    <h2 className="font-bold text-lg">{title}</h2>
    <p className="text-lg font-bold flex items-center">
      ${price.toFixed(2)} <span className="text-sm text-gray-600 ml-2">x {quantity}</span>
    </p>
    <CartItem.Rating rate={rating.rate} count={rating.count} />
    <div className="flex gap-2">{children}</div>

    {/* Quantity Controls */}
    <CartItem.QuantityControls onIncrease={onIncrease} onDecrease={onDecrease} quantity={quantity} />
  </div>
);

/** 
 * ✅ SRP: Separate component for rating display. 
 */
CartItem.Rating = ({ rate, count, className, ...props }: HTMLAttributes<HTMLDivElement> & { rate: number; count: number }) => (
  <div className={`flex items-center text-sm text-gray-600 ${className}`} {...props}>
    ⭐ {rate} ({count} reviews)
  </div>
);

/** 
 * ✅ SRP: Separate component for category display. 
 */
CartItem.Category = ({ category, className, ...props }: HTMLAttributes<HTMLSpanElement> & { category: string }) => (
  <span className={`bg-gray-200 text-xs font-bold px-2 py-1 rounded-md text-gray-700 ${className}`} {...props}>
    {category.toUpperCase()}
  </span>
);

/** 
 * ✅ SRP: Separate component for quantity controls. 
 * ✅ OCP: We can extend it to support text input or buttons in the future.
 */
CartItem.QuantityControls = ({ quantity, onIncrease, onDecrease }: { 
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) => (
  <div className="flex items-center gap-2 mt-2">
    <button
      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      onClick={onDecrease}
      aria-label="Decrease quantity"
    >
      <FiMinus />
    </button>
    <span className="text-lg">{quantity}</span>
    <button
      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      onClick={onIncrease}
      aria-label="Increase quantity"
    >
      <FiPlus />
    </button>
  </div>
);

/** 
 * ✅ SRP: Separate component for action buttons (e.g., remove button). 
 * ✅ OCP: Easily extendable for additional buttons in the future.
 */
CartItem.Actions = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) => (
  <div className={`flex items-center ${className}`} {...props}>
    {children}
  </div>
);

export default CartItem;
