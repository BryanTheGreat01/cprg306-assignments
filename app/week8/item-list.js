"use client";
import { useState } from "react";
import ItemComponent from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const itemCopy = [...items];
  itemCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  const handleSort = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSortBy(value);
  };

  return (
    <main>
      <form>
        <button
          className="w-1/8 bg-blue-400 ml-5 mb-6 mr-4 rounded"
          value="category"
          onClick={handleSort}
        >
          sort by category
        </button>

        <button
          className="w-1/8 bg-blue-400 ml-5 mb-6 mr-4 rounded"
          value="name"
          onClick={handleSort}
        >
          sort by name
        </button>
      </form>

      <ul>
        {itemCopy.map((item) => (
          <li key={item.id}>
            <ItemComponent item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
