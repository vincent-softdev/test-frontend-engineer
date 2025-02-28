import ProductList from "@/views/ProductList";
import { ProductService } from "@/services/ProductService";
import { IProduct } from "@/types";

export const metadata = {
  title: "Product Listing",
};

const HomePage = async () => {
  // ✅ Fetch products from API
  const products: IProduct[] = await ProductService.getProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
