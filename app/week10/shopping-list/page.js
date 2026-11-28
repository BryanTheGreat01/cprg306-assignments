"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import Meals from "./meal-ideas";
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service";
import { useEffect } from "react";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = async (item) => {
    try {
      const id = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { ...item, id }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const loadItems = async () => {
    try {
      const result = await getItems(user.uid);
      setItems(result);
    } catch (error) {
      console.error("Error loading items:", error);
    }
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
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);
  if (!user) {
    return (
      <div>
        <h1>Secured Page</h1>
        <p>This page is only accessible by logged in users</p>
        <p>Go away, you must sign in to access this page</p>
      </div>
    );
  }

  return (
    <main className="justify-center bg-slate-600 ">
      <h1 className="text-2xl font-bold mb-4 mt-5 ml-5">Shopping List</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <Meals ingredients={selectedItemName} />
      <NewItem onAddItem={handleAddIItem} />
    </main>
  );
}
