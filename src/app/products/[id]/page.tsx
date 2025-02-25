'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductService } from '@/services/ProductService';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { FiHeart, FiShare2, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = params?.id;
    if (typeof id === 'string' && !isNaN(Number(id))) {
      ProductService.getProduct(Number(id))
        .then(setProduct)
        .catch(console.error);
    }
  }, [params]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-white shadow rounded-lg">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="rounded-lg w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex gap-4">
            <button className="text-pink-500"><FiHeart size={24} /></button>
            <button className="text-gray-500"><FiShare2 size={24} /></button>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="text-2xl font-bold text-blue-500 mb-4">${product.price}</div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Choose a Size</h3>
          <div className="flex gap-2">
            {['Small', 'Medium', 'Large', 'Extra Large', 'XXL'].map((size) => (
              <button key={size} className="border px-4 py-1 rounded-md hover:bg-gray-100">{size}</button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button onClick={decrementQuantity} className="text-red-500"><FiMinusCircle size={24} /></button>
          <span className="text-xl">{quantity}</span>
          <button onClick={incrementQuantity} className="text-green-500"><FiPlusCircle size={24} /></button>
        </div>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
