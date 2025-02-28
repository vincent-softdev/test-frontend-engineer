type ProductInfoProps = {
    title: string;
    price: number;
  };
  
  const ProductInfo = ({ title, price }: ProductInfoProps) => (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="text-2xl font-bold text-blue-500 mb-4 flex gap-2">
        <p className="text-black">Price:</p> ${price}
      </div>
  
      {/* ✅ Size Selection */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Choose a Size</h3>
        <div className="flex gap-2">
          {["Small", "Medium", "Large"].map((size) => (
            <button key={size} className="border px-4 py-1 rounded-md hover:bg-gray-100">
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default ProductInfo;
  