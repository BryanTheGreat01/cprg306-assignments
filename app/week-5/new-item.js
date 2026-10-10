"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        New Item
      </h1>

      {/* Name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Item Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Quantity
        </label>

        <div className="flex items-center justify-between">
          <button
            type="button"
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
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-200 text-white font-bold text-xl rounded-md w-12 h-12"
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md transition"
      >
        Add Item
      </button>
    </form>
  );
}