"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add, decrement, updateQuantity, isInCart, cart } = useCart();
  const [open, setOpen] = useState(false);

  const item = cart.find((i) => i.id === product.id);
  const inCart = isInCart(product.id);

  function handleAdd() {
    add({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }

  function increase() {
    updateQuantity(product.id, (item?.quantity || 0) + 1);
  }

  function decrease() {
    decrement(product.id);
  }

  return (
    <div className="border rounded-lg p-4">
      <img
        src={product.image}
        className="w-full h-48 object-cover rounded"
        alt={product.name}
      />

      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>

      {/* If NOT in cart: show Add to Bag */}
      {!inCart && (
        <button
          className="mt-3 px-4 py-2 bg-black text-white rounded w-full"
          onClick={handleAdd}
        >
          Add to Bag
        </button>
      )}

      {/* If already in cart: show quantity controls */}
      {inCart && (
        <div className="mt-3 flex items-center justify-between bg-gray-100 rounded p-2">
          <button
            onClick={decrease}
            className="px-3 py-1 bg-gray-300 rounded text-lg"
          >
            –
          </button>

          <span className="font-medium">{item?.quantity}</span>

          <button
            onClick={increase}
            className="px-3 py-1 bg-gray-300 rounded text-lg"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
