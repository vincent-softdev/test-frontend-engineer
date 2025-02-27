import { FiMinus, FiPlus } from 'react-icons/fi';

type QuantitySelectorProps = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
};

const QuantitySelector = ({ quantity, increment, decrement }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
      <button
        className="text-lg p-2 cursor-pointer"
        onClick={decrement}
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        className="text-lg p-2 cursor-pointer"
        onClick={increment}
        aria-label="Increase quantity"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;
