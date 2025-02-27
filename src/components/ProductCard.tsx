import { IProduct } from "@/types";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

/** ✅ SRP: ProductCard only controls layout */
type ProductCardProps = {
  children?: React.ReactNode;
  className?: string;
};

const ProductCard = ({ children, className }: ProductCardProps) => {
  return (
    <div className={`border p-4 rounded shadow-md relative flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
};

/** ✅ SRP: Image Component (Handles product image) */
ProductCard.Image = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center h-[250px]">
    <img
      src={src}
      alt={alt}
      className="max-h-full max-w-full object-contain rounded-lg"
    />
  </div>
);

/** ✅ SRP: Info Component (Handles product details like title & category) */
ProductCard.Info = ({ title, category }: { title: string; category: string }) => (
  <div className="mt-2">
    <p className="text-sm text-gray-500 uppercase">{category}</p>
    <h2 className="font-bold text-md">{title}</h2>
  </div>
);

/** ✅ SRP: Price Component (Handles price display) */
ProductCard.Price = ({ price }: { price: number }) => (
  <div className="text-lg font-bold">${price.toFixed(2)}</div>
);

/** ✅ SRP: Favorite Button (Handles wishlisting items) */
ProductCard.FavoriteButton = () => (
  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-200">
    <FiHeart className="text-gray-600" size={20} />
  </button>
);

/** ✅ SRP: Action Buttons (View Details) */
ProductCard.Actions = ({ productId }: { productId: number }) => (
  <div className="mt-4">
    <Link href={`/products/${productId}`}>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        View Details
      </button>
    </Link>
  </div>
);

export default ProductCard;
