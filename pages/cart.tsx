"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return <div className="p-6 text-xl">Your bag is empty 😢</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Your Bag</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={item.image}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="font-medium">{item.name}</h2>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
}
