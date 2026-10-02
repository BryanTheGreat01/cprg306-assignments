"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        New Item
      </h1>

      <div className="flex items-center justify-between">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-800 font-bold text-xl rounded-md w-12 h-12"
        >
          −
        </button>

        <span className="text-2xl font-semibold text-gray-800">
          {quantity}
        </span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-200 text-white font-bold text-xl rounded-md w-12 h-12"
        >
          +
        </button>
      </div>
    </div>
  );
}