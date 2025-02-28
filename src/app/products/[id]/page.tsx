"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductService } from "@/services/ProductService";

import { IProduct } from "@/types";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductDetailCard from "@/components/product/ProductDetailCard";

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = params?.id;

    if (typeof id === "string" && !isNaN(Number(id))) {
      ProductService.getProduct(Number(id))
        .then((data) => {
          if (data) {
            setProduct(data);
          } else {
            setError("Product not found");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setError("Failed to load product details.");
          setLoading(false);
        });
    } else {
      setError("Invalid product ID.");
      setLoading(false);
    }
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (error) return <ProductNotFound />; // ✅ Show error page if product not found

  return (
    <div className="flex justify-center">
      {product ? <ProductDetailCard product={product} /> : <ProductNotFound />}
    </div>
  );
};

export default ProductDetailPage;
