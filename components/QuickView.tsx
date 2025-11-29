import React from 'react';
import { useCart } from '../lib/cart';

export default function QuickView({ product, onClose }: { product: any; onClose: () => void }): JSX.Element {
  const { add } = useCart();

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl">
        <div className="flex gap-6">
          <div className="w-48 h-48 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
            <img src={product.image} alt={product.name} className="object-contain h-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 font-semibold">${product.price.toFixed(2)}</div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  add({ id: product.id, name: product.name, price: product.price }, 1);
                  onClose();
                }}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Add to Cart
              </button>
              <button onClick={onClose} className="px-4 py-2 border rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
