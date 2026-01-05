import { useCartStore } from "../../store/cartStore";

export default function CartItem({ item }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleDecrease = () => {
    if (item.quantity === 1) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 border-b border-zinc-200 py-4">
      {/* Image */}
      <div className="w-20 h-20 bg-zinc-100 rounded-md flex items-center justify-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="object-contain h-16"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-zinc-500">${item.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button onClick={handleDecrease} className="px-2 py-1 border rounded">
            −
          </button>

          <span className="font-medium">{item.quantity}</span>

          <button onClick={handleIncrease} className="px-2 py-1 border rounded">
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
