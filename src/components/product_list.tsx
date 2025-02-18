"use client";

import { useQuery } from "@apollo/client";
import { getAllProducts } from "@/queries/product";
import { Product } from "../types/product";
import { parseImageUrl } from "../utils/helps";

export default function ProductList() {
    const { loading, error, data } = useQuery(getAllProducts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching products: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Product Listing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {data.products.map((product: Product) => (
                    <div key={product.id} className="border p-4 rounded-md">
                        <img
                            src={parseImageUrl(product.images)}
                            alt={product.title}
                            className="h-40 mx-auto"
                        />
                        <h2 className="font-semibold">{product.title}</h2>
                        <p className="text-sm">{product.category.name}</p>
                        <img
                            src={product.category.image}
                            alt={product.title}
                            className="h-40 mx-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
