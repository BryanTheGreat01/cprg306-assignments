
"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Shopping List
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
      </div>
    </main>
  );
}
