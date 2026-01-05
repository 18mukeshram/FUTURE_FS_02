import { useCartStore } from "../../store/cartStore";

export default function PriceSummary() {
  const total = useCartStore((state) => state.totalAmount());

  return (
    <div className="border border-zinc-200 rounded-xl p-4 space-y-4">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span className="text-zinc-500">Free</span>
      </div>

      <div className="border-t pt-3 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
