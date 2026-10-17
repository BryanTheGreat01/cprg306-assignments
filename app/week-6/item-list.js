"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items by name or category
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.trim().localeCompare(b.name.trim());
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;
  });

  // Group items by category and sort item names alphabetically
  const groupedItems = [...items]
    .sort((a, b) => a.name.trim().localeCompare(b.name.trim()))
    .reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }

      groups[item.category].push(item);

      return groups;
    }, {});

  return (
    <div>
      {/* Sorting buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <button
          onClick={() => setSortBy("name")}
          className={`px-6 py-4 rounded-lg text-2xl font-bold ${
            sortBy === "name"
              ? "bg-amber-500 text-white"
              : "bg-slate-500 text-white"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-6 py-4 rounded-lg text-2xl font-bold ${
            sortBy === "category"
              ? "bg-amber-500 text-white"
              : "bg-slate-500 text-white"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("group")}
          className={`px-6 py-4 rounded-lg text-2xl font-bold ${
            sortBy === "group"
              ? "bg-amber-500 text-white"
              : "bg-slate-500 text-white"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Grouped list */}
      {sortBy === "group" ? (
        Object.keys(groupedItems)
          .sort((a, b) => a.localeCompare(b))
          .map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold capitalize mt-4 mb-2">
                {category}
              </h2>

              <ul>
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))
      ) : (
        /* Sorted list */
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
