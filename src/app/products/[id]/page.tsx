'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductService } from '@/services/ProductService';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { FiShoppingCart, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';

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
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-white shadow rounded-lg mt-[100px]">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="rounded-lg w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2 ml-[80px] gap-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <p className="text-gray-700 mb-4 xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px]">{product.description}</p>
        <div className="text-2xl font-bold text-blue-500 mb-4 flex gap-2"><p className='text-black'>Price:</p> ${product.price}</div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Choose a Size</h3>
          <div className="flex gap-2">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button key={size} className="border px-4 py-1 rounded-md hover:bg-gray-100">{size}</button>
            ))}
          </div>
        </div>

        <div className='flex gap-8'>
            <div className="flex w-fit h-full items-center gap-2 bg-gray-100 rounded-full p-2 mb-6">
              <button
                  className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px] p-2 cursor-pointer"
                  onClick={decrementQuantity}
              >
                  <FiMinus />
              </button>
              <span className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px]">{quantity}</span>
              <button
                  className="xl:text-[28px] lg:text-[24px] md:text-[16px] sm:text-[16px] p-2  cursor-pointer"
                  onClick={incrementQuantity}
              >
                  <FiPlus />
              </button>
            </div>

            <button
              className="ml-10 md:text-[40px] sm:h-fit md:h-auto sm:mt-3 md:mt-0 sm:text-[24px] cursor-pointer"
              onClick={() => addToCart(product, quantity)}
              >
              <FiShoppingCart className='text-black'/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
