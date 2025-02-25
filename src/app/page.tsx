import { ProductService } from "@/services/ProductService";
import { Product } from "@/types";

export const metadata = {
  title: "Product Listing",
  description: "List of products with Next.js",
}

const HomePage = async () => {
  // Initial product or load products
  const products: Product[] = await ProductService.getProducts();
  // Test whether we do have the response
  console.log(products);

  return (
    <div>
      Clean project
    </div>
  );
}

export default HomePage