'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductService } from '@/services/ProductService';
import { IProduct } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { FiShoppingCart, FiMinus, FiPlus } from 'react-icons/fi';

// This is the long form of the component
// Do not have enough time so I will not separate this file
const ProductDetailPage = () => {
  // Get the params: id
  const params = useParams();
  // State
  const [product, setProduct] = useState<IProduct | null>(null);
  // 🔥 Add item to Cart -> Call the Store (state management to handle to save item)
  const addToCart = useCartStore((state) => state.addToCart);
  // We do want to know how many items are in the cart
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = params?.id;
    // Sometime user will try to check with empty string
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
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 w-fit p-10 bg-white shadow rounded-lg mt-[100px]">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={product.image} alt={product.title} className="rounded-lg max-h-[320px] object-fill" />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 ml-[80px] gap-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </div>
          <div className="text-2xl font-bold text-blue-500 mb-4 flex gap-2">
            <p className="text-black">Price:</p> ${product.price}
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Choose a Size</h3>
            <div className="flex gap-2">
              {['Small', 'Medium', 'Large'].map((size) => (
                <button key={size} className="border px-4 py-1 rounded-md hover:bg-gray-100">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex gap-8">
            {/* Quantity Selector */}
            <div className="flex w-fit h-fit items-center gap-2 bg-gray-100 rounded-full p-2 mb-6">
              <button
                className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px] p-2 cursor-pointer"
                onClick={decrementQuantity}
              >
                <FiMinus />
              </button>
              <span className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px]">{quantity}</span>
              <button
                className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px] p-2 cursor-pointer"
                onClick={incrementQuantity}
              >
                <FiPlus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="flex w-fit h-fit items-center gap-2 rounded-full p-2 mb-6">
              <button
                className="ml-10 md:text-[32px] sm:h-fit md:h-auto sm:mt-0 sm:text-[24px] cursor-pointer"
                onClick={() => addToCart(product, quantity)}
              >
                <FiShoppingCart className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
