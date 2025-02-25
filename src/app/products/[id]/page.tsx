'use client'

import { ProductService } from "@/services/ProductService";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
    const params = useParams();
    // Init empty product
    const [product, setProduct] = useState<Product | null>(null);
    
    useEffect(() => {
        const id = params?.id;
        
        if(typeof id === 'string' && !isNaN(Number(id))){
            ProductService.getProduct(Number(id)).then(setProduct).catch(console.error);
        }
    }, [params]);

    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <img src={product.image} alt={product.title} className="h-60 object-cover mx-auto"/>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-2 p-2 bg-blue-500 text-white">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetailPage
