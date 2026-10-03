"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="mx-auto flex flex-row bg-gray-100 rounded border-2 border-black">
      <button
        id="decrement-button"
        disabled={quantity === 1}
        className="w-8 py-1 text-white bg-blue-600 disabled:bg-slate-400 hover:bg-blue-400"
        onClick={decrementQuantity}
      >
        -
      </button>
      <input
        type="text"
        className="w-16 py-1 text-black font-bold text-center "
        value={quantity}
        disabled
      />
      <button
        id="increment-button w-8"
        disabled={quantity === 20}
        className="w-8 py-1 text-white bg-blue-600 disabled:bg-slate-400 hover:bg-blue-400"
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  );
}
