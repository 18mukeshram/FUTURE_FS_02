import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Checkout() {
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.totalAmount());

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    for (const field in form) {
      if (!form[field]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    // Simulated successful order
    clearCart();
    navigate("/success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />

            <input
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Summary */}
        <div className="border border-zinc-200 rounded-xl p-4 space-y-4 h-fit">
          <h2 className="font-semibold">Order Summary</h2>

          <div className="text-sm text-zinc-600">Items: {items.length}</div>

          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <p className="text-xs text-zinc-500">
            Payment is simulated. No real charges.
          </p>
        </div>
      </div>
    </div>
  );
}
