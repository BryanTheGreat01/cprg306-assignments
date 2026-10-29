"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import  itemsData  from "./items.json"
import { useState } from "react";

export default function Page() {
  let [items, setItems] = useState(itemsData)

  function handleAddItem(item){
    setItems([...items, item])
  }
  return (
    <main className="bg-blue-900 mx-auto max-w-160 p-4">
      <h1 className="text-4xl text-white font-bold mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}
