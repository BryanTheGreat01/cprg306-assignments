"use client";
import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
  let [sortBy, setSortBy] = useState("name");
  if (sortBy == "name") {
    itemsData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy == "category") {
    itemsData.sort((a, b) => a.category.localeCompare(b.category));
  }
  return (
    <div>
      <div className="flex gap-2 mb-2">
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
      {itemsData.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
