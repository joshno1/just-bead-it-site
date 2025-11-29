import React, { useState } from 'react';
import QuickView from './QuickView';
import { useCart } from '../lib/cart';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }): JSX.Element {
  const { add } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white rounded-xl shadow p-4">
      <div className="h-56 w-full relative rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-contain h-full" />
      </div>
      <h4 className="mt-3 font-semibold">{product.name}</h4>
      <div className="text-sm text-gray-600 mt-1">{product.description}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-semibold">${product.price.toFixed(2)}</div>
        <div className="flex gap-2">
          <button
            onClick={() => add({ id: product.id, name: product.name, price: product.price }, 1)}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Add
          </button>
          <button onClick={() => setOpen(true)} className="px-3 py-1 border rounded">
            View
          </button>
        </div>
      </div>
      {open && <QuickView product={product} onClose={() => setOpen(false)} />}
    </article>
  );
}
