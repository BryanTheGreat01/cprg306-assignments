"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./item.json";
import { useState } from "react";
import Meals from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    const newName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "",
      )
      .trim();
    setSelectedItemName(newName);
  };
  return (
    <main className="justify-center bg-slate-600 ">
      <h1 className="text-2xl font-bold mb-4 mt-5 ml-5">Shopping List</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <Meals ingredients={selectedItemName} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
