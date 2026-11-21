"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  let [items, setItems] = useState(itemsData);
  let [searchQuery, setSearchQuery] = useState("");
  let [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(name) {
     const firstPart = name.split(",")[0]
    const cleaned = cleanItemName(firstPart).trim()
    setSelectedItemName(cleaned);
    setSearchQuery(cleaned)
  }

  function cleanItemName(str) {
    // Source - https://stackoverflow.com/a/41543705
    // Posted by jony89, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-11-06, License - CC BY-SA 4.0
   return str.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      "",
    );
  }
  return (
    <main className="bg-blue-900 mx-auto p-4">
      <div className="flex flex-row">
        <div>
          <h1 className="text-4xl text-white font-bold mb-8">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas className="w-50" searchedIngredient={searchQuery} />
      </div>
    </main>
  );
}
