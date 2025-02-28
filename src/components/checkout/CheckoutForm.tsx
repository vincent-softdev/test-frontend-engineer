"use client";
import { useState } from "react";

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: "", address: "", email: "" });

  // Normally, this screen will ask user to enter quite a list of details
  // However, this is just a fake form, so I will skip this step
  // ❌ Please do not skip me like I skip this step
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
