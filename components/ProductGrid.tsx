import React from 'react';
import PRODUCTS from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid(): JSX.Element {
  return (
    <section aria-labelledby="shop-heading" className="mt-8">
      <h2 id="shop-heading" className="text-2xl font-semibold">Shop Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
