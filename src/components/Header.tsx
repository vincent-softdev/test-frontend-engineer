'use client';

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartStore } from '@/store/useCartStore';

const Header = () => {
  const cartCount = useCartStore((state) => state);

  return (
    <header className="text-black p-4 flex justify-center">
      <div className="flex justify-between container mx-auto p-4">
        {/* Home Button */}
        <Link href="/" className="flex-1">
          <button className="flex text-2xl items-center cursor-pointer gap-2 hover:font-bold">
            VINCENT SHOPEE
          </button>
        </Link>

        {/* Cart Button with Cart Count Badge */}
        <Link href="/cart" className="flex-1 justify-end flex relative">
          <button className="flex items-center gap-2 hover:font-bold cursor-pointer">
            <FiShoppingCart size={36} />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
