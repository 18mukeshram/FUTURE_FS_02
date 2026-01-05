import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-zinc-100 flex items-center justify-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-40"
          />
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <Link
          to={`/product/${product.id}`}
          className="font-medium line-clamp-2 hover:underline"
        >
          {product.title}
        </Link>

        <div className="flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>

          <button
            onClick={() => addItem(product)}
            className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
