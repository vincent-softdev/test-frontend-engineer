import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartStore } from '@/store/useCartStore';

const HeaderCartIcon = () => {
  const cartCount = useCartStore((state) => state.cartCount); // ✅ Now dynamically updates

  return (
    <Link href="/cart" className="relative">
      <button className="hover:text-gray-700">
        <FiShoppingCart size={28} />
      </button>

      {/* ✅ Show Cart Count Badge */}
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default HeaderCartIcon;
