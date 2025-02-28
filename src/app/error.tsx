"use client";
import { useEffect } from "react";
import Link from "next/link";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
      <p className="text-lg text-gray-600">An unexpected error occurred. Please try again later.</p>

      <div className="mt-4 flex gap-4">
        {/* ✅ Retry Button (Useful for API errors) */}
        <button
          onClick={reset}
          className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Try Again
        </button>

        {/* ✅ Navigate back home */}
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GlobalError;
