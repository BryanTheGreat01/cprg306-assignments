"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    if (!itemName) {
      setSelectedItemName(null);
    } else {
      const formattedItemName = itemName
        .replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          "",
        )
        .split(",")[0]
        .trim();
      setSelectedItemName(formattedItemName);
    }
  };

  if (!user) {
    return (
      <main className="mx-auto flex flex-row gap-6 bg-gray-100 p-6">
        <div className="bg-white rounded p-6 flex flex-col items-center gap-4 shadow-sm">
          <h1 className="text-black text-2xl font-bold">
            You are not signed in
          </h1>
          <p className="text-gray-600">
            You must be signed in to view this page.
          </p>
          <Link
            href="/week-9"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex flex-row gap-6 bg-gray-100 p-6">
      <div className="bg-white rounded p-3 flex flex-col gap-6 shadow-sm">
        <h1 className="text-black  text-2xl font-bold">
          Shopping List + Meal Ideas
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="bg-white rounded p-3 flex flex-col w-96 shadow-sm">
        {selectedItemName == null ? (
          <>
            <p className="text-black text-xl font-bold ">
              Meal Ideas &#40;Select an item&#41;
            </p>
            <p className="text-gray-600">Choose an item to see ideas.</p>
          </>
        ) : (
          <MealIdeas ingredient={selectedItemName} />
        )}
      </div>
    </main>
  );
}
