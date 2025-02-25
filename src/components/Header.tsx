import Link from 'next/link';
import { FiShoppingCart, FiHome } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center">
      <Link href="/">
        <button className="flex items-center gap-2 hover:text-gray-300">
          <FiHome size={24} />
          Home
        </button>
      </Link>
      <h1 className="text-2xl font-bold">My Store</h1>
      <Link href="/cart">
        <button className="flex items-center gap-2 hover:text-gray-300">
          <FiShoppingCart size={24} />
          Cart
        </button>
      </Link>
    </header>
  );
};

export default Header;
