import React from 'react';
import { useCart } from '../lib/cart';

export default function CartPage(): JSX.Element {
  const { items, updateQty, remove, clear } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  async function checkout(): Promise<void> {
    const res = await fetch('/api/create-checkout-session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items }) });
    const data = await res.json();
    if (data.id) {
      const stripe = (window as any).Stripe ? (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) : null;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        alert('Stripe.js not initialized — add publishable key to _app or include Stripe script');
      }
    } else {
      alert('Checkout failed');
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      <div className="mt-4 space-y-4">
        {items.length === 0 && <div className="text-gray-500">Your cart is empty.</div>}
        {items.map((it) => (
          <div key={it.id} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">Img</div>
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-500">${it.price.toFixed(2)} × {it.quantity}</div>
              <div className="mt-2 flex gap-2">
                <button onClick={() => updateQty(it.id, it.quantity - 1)}>-</button>
                <span>{it.quantity}</span>
                <button onClick={() => updateQty(it.id, it.quantity + 1)}>+</button>
              </div>
            </div>
            <div>
              <button onClick={() => remove(it.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4 flex items-center justify-between">
        <div className="font-semibold">Subtotal ${subtotal.toFixed(2)}</div>
        <div className="flex gap-2">
          <button onClick={clear} className="px-3 py-1 border">Clear</button>
          <button onClick={checkout} className="px-3 py-1 bg-green-600 text-white rounded">Checkout</button>
        </div>
      </div>
    </main>
  );
}
