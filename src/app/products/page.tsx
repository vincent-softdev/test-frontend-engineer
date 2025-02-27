import ProductCard from "@/components/ProductCard";
import { ProductService } from "@/services/ProductService";
import { IProduct } from "@/types";

export const metadata = {
  title: "Product Listing",
}

const ProductPage = async () => {
  // Initial product or load products
  const products: IProduct[] = await ProductService.getProducts();
  // Test whether we do have the response
  console.log(products);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage