"use client";
import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(
      "Submitted: (Name: " +
        item.name +
        ") (Quantity: " +
        item.quantity +
        ") (Category: " +
        item.category +
        ")",
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

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
    <main className="min-h-screen bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center py-2 bg-gray-400 ml-6"
      >
        <div className="flex flex-row items-start justify-center py-2 ">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-purple-800 hover:bg-purple-600 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded "
          >
            -
          </button>

          <p className="text-black font-bold py-2 px-2 bg-amber-50">
            Quantity: {quantity}
          </p>

          <button
            onClick={increment}
            disabled={quantity === 20}
            className="bg-purple-800 hover:bg-purple-600 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
          >
            +
          </button>
        </div>

        <label htmlFor="name" className="text-black font-bold py-2 px-2">
          Item Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="border-2 border-black-500 rounded py-2 px-4 ml-2 focus:ring-2 focus:ring-black-500 text-black"
        />
        <label htmlFor="category" className="text-black font-bold py-2 px-2">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="border-2 border-black-500 rounded py-2 px-4 ml-2 mb-5 focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value="produce" className="text-black">
            Produce
          </option>
          <option value="dairy" className="text-black">
            Dairy
          </option>
          <option value="meat" className="text-black">
            Meat
          </option>
          <option value="frozen" className="text-black">
            Frozen
          </option>
          <option value="canned" className="text-black">
            Canned
          </option>
          <option value="Dry goods" className="text-black">
            Dry Goods
          </option>
          <option value="Beverages" className="text-black">
            Beverages
          </option>
          <option value="Snacks" className="text-black">
            Snacks
          </option>
          <option value="Household" className="text-black">
            Household
          </option>
          <option value="Other" className="text-black">
            Other
          </option>
        </select>

        <div className=" border-2 border-black-500 rounded py-2 px-4 ml-2 focus:ring-2 focus:ring-blue-500 text-black">
          <button type="submit" alert="Item submitted successfully!">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
