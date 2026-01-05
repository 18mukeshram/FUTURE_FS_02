import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Mini<span className="text-indigo-600">Store</span>
        </Link>

        <Link
          to="/cart"
          className="relative text-sm font-medium text-zinc-700 hover:text-zinc-900 transition"
        >
          Cart
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
