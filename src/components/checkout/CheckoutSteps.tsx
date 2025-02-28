"use client";
import { useState } from "react";

// It's a stepper component that displays a sequence 
// of child components (children) one at a time, with 
// navigation buttons to move between them. The current step 
// is managed by the step state variable, which is initialized to 0. 
// The "Back" button decrements the step, and the "Next" button increments it, 
// but only up to the last child component.
const CheckoutSteps = ({ children }: { children: React.ReactNode[] }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto">
      {/* ✅ Each Step will run in here */}
      {children[step]}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          disabled={step === 0}
          onClick={() => setStep((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Back
        </button>
        {step !== children.length - 1 && <button
          onClick={() => setStep((prev) => Math.min(prev + 1, children.length - 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>}
      </div>
    </div>
  );
};

export default CheckoutSteps;
