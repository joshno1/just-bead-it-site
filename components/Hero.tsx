import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Handmade Beaded Jewelry for Every Season</h1>
          <p className="mt-2 text-gray-700">Discover festive charm bracelets, everyday stacks, and custom designs — all handmade with care.</p>
        </div>
        <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Brand Image</span>
        </div>
      </div>
    </section>
  );
}
