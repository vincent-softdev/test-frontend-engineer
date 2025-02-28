"use client";
import { useState } from "react";

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: "", address: "", email: "" });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded mb-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded mb-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Shipping Address"
        className="w-full p-2 border rounded mb-2"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
    </div>
  );
};

export default CheckoutForm;
