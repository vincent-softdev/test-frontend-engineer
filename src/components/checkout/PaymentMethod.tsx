"use client";
import { useState } from "react";

// ✅ Nah, this is just a fake payment method
// I will skip this step
// ❌ Again, please do not skip me as I skip this step
const PaymentMethod = () => {
  const [method, setMethod] = useState("credit-card");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setMethod("credit-card")}
          className={`px-4 py-2 border rounded-md ${
            method === "credit-card" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => setMethod("paypal")}
          className={`px-4 py-2 border rounded-md ${
            method === "paypal" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          PayPal
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
