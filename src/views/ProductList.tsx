import ProductCard from "../components/ProductCard";
import { IProduct } from "@/types";

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} className="flex flex-col h-full">
          <ProductCard.FavoriteButton />

          {/* ✅ Image stays in the top part, centered */}
          <div className="flex-grow flex items-center justify-center">
            <ProductCard.Image src={product.image} alt={product.title} />
          </div>

          {/* ✅ Ensuring Info, Price, and Actions stay at the bottom */}
          <div className="flex flex-col justify-between h-full">
            <ProductCard.Info title={product.title} category={product.category} />
            <ProductCard.Price price={product.price} />
            <ProductCard.Actions productId={product.id} />
          </div>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
