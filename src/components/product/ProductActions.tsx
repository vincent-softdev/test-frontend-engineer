"use client";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import { FiShoppingCart, FiMinus, FiPlus } from "react-icons/fi";
import { IProduct } from "@/types";

type ProductActionsProps = {
  product: IProduct;
};

const ProductActions = ({ product }: ProductActionsProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex gap-8">
      {/* ✅ Quantity Selector */}
      <div className="flex w-fit h-fit items-center gap-2 bg-gray-100 rounded-full p-2 mb-6">
        <button className="p-2 cursor-pointer" onClick={decrementQuantity}>
          <FiMinus />
        </button>
        <span className="text-lg">{quantity}</span>
        <button className="p-2 cursor-pointer" onClick={incrementQuantity}>
          <FiPlus />
        </button>
      </div>

      {/* ✅ Add to Cart Button */}
      <button
        className="ml-10 md:text-[32px] sm:text-[24px] mb-5 cursor-pointer"
        onClick={() => addToCart(product, quantity)}
      >
        <FiShoppingCart className="text-black" />
      </button>
    </div>
  );
};

export default ProductActions;
