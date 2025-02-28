import Link from "next/link";

const ProductNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      <p className="text-lg text-gray-600">The product you are looking for does not exist.</p>
      <Link href="/">
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ProductNotFound;
