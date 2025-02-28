"use client";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();

  return (
    <div className="p-10 bg-white shadow-md rounded-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
      <CheckoutSteps>
        <OrderSummary />
        <CheckoutForm />
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
          <p>Make sure everything is correct before confirming your order.</p>
          <button
            onClick={() => router.push("/success")}
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md"
          >
            Place Order
          </button>
        </div>
      </CheckoutSteps>
    </div>
  );
};

export default CheckoutPage;
