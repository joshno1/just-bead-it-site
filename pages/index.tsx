import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { CartProvider } from '../lib/cart';

export default function Home(): JSX.Element {
  return (
    <CartProvider>
      <Head>
        <title>Just Bead It — Handmade Jewelry</title>
        <meta name="description" content="Just Bead It — handmade beaded bracelets and holiday charms." />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="max-w-6xl mx-auto p-6">
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
