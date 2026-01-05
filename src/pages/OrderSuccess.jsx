import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Confirmed 🎉
      </h1>

      <p className="text-zinc-600 mb-8">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Back to Store
      </Link>
    </div>
  );
}
