"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(
      `Item Added: Item: ${name}, Quantity: ${quantity}, Category: ${category}`,
    );

    setName("");
    setCategory("produce");
    setQuantity(1);
  };

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded w-75 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row bg-gray-100 rounded border border-black">
          <button
            type="button"
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
            type="button"
            id="increment-button"
            disabled={quantity === 20}
            className="w-8 py-1 text-white bg-blue-600 disabled:bg-slate-400 hover:bg-blue-400"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <div>
          <select className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-400 rounded"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
