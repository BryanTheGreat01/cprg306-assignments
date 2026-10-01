"use client";
import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className="flex flex-row items-start justify-center min-h-screen py-2">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-purple-800 hover:bg-purple-600 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded "
      >
        -
      </button>

      <p className="text-white font-bold py-3 px-3">Quantity: {quantity}</p>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-purple-800 hover:bg-purple-600 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
    </main>
  );
}
