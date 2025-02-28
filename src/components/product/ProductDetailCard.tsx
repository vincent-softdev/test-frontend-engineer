
import { IProduct } from "@/types";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";

type ProductDetailCardProps = {
  product: IProduct;
};

const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-fit p-10 bg-white shadow rounded-lg mt-[100px]">
      {/* ✅ Product Image */}
      <ProductImage src={product.image} alt={product.title} />

      {/* ✅ Product Info & Actions */}
      <div className="md:w-1/2 ml-[80px] gap-4 flex flex-col">
        <ProductInfo title={product.title} price={product.price} />
        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default ProductDetailCard;
