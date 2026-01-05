import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/productApi";
import { useCartStore } from "../store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-zinc-500">
        Loading product…
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">Product not found</div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="bg-zinc-100 rounded-xl flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-96 object-contain"
        />
      </div>

      {/* Info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-zinc-600 leading-relaxed">{product.description}</p>

        <div className="text-2xl font-semibold">${product.price}</div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Quantity</span>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-20 border border-zinc-300 rounded-md px-2 py-1"
          />
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
