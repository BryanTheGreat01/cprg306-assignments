"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList( { items }) {
  let [sortBy, setSortBy] = useState("name");
  let itemsCopy = [...items]

  if (sortBy == "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy == "category") {
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="flex gap-2 mb-2">
        {/* Sorting buttons */}
        <button
          className={`p-4 rounded font-bold 
          ${sortBy == 'name' ? "bg-yellow-400": "bg-slate-500"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`p-4 rounded font-bold 
          ${sortBy == 'category' ? "bg-yellow-400": "bg-slate-500"}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      {itemsCopy.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </div>
  );
}
