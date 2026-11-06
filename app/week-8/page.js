"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  let [items, setItems] = useState(itemsData);
  // need selected moved up from item list to parent component then into meal ideas component
  let [selected, setSelected] = useState("")

  function handleAddItem(item) {
    setItems([...items, item]);
  }
  return (
    <main className="bg-blue-900 mx-auto max-w-160 p-4">
      <div className="flex flex-row">
      <div>
        <h1 className="text-4xl text-white font-bold mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
      <MealIdeas className="w-50 "/>
      </div>

    </main>
  );
}
