import Link from 'next/link';
import React from 'react';
import { useCart } from '../lib/cart';

export default function Header(): JSX.Element {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  

  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">Just Bead It</div>
          <nav className="hidden md:flex gap-4 text-gray-600">
            <Link href="#">Shop</Link>
            <Link href="#about">About</Link>
            <Link href="#custom">Custom Orders</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6h15l-1.5 9h-12z" stroke="#111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {count > 0 && <span className="ml-1 inline-block bg-red-500 text-white text-xs rounded-full px-2">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
