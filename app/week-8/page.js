"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  // Handle selecting an item from the shopping list.
  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Shopping List
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Shopping list section */}
        <div className="flex-1 w-full space-y-8">
          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>

        {/* Meal ideas section */}
        <div className="flex-1 w-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}