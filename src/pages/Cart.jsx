import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/cart/CartItem";
import PriceSummary from "../components/cart/PriceSummary";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-zinc-500 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Items */}
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <PriceSummary />

        <Link
          to="/checkout"
          className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
