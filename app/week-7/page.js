"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  return (
    <main className="mx-auto">
      <div className="bg-white rounded p-3 flex flex-col gap-6">
        <h1 className="text-black  text-4xl font-bold">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
