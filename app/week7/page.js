"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./item.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="justify-center bg-slate-600 ">
      <h1 className="text-2xl font-bold mb-4 mt-5 ml-5">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
