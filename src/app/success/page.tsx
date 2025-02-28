"use client";
import { useRouter } from "next/navigation";

// Just a simple success page
const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-lg text-gray-600">Your order has been placed successfully.</p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
