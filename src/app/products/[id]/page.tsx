import { ProductService } from "@/services/ProductService";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductDetailCard from "@/components/product/ProductDetailCard";

// ✅ Server Component (NO "use client")
const ProductDetailPage = async ({ params }: { params: { id?: string } }) => {
  const awaitedParams = await params;
  const id = Number(awaitedParams.id);

  if (isNaN(id)) {
    console.error("❌ Invalid product ID:", params.id);
    return <ProductNotFound />;
  }

  const product = await ProductService.getProduct(id);

  console.log("🔍 Product fetched:", product); // 🔍 Debugging API Response

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="flex justify-center">
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetailPage;
