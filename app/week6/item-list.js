"use client";
import { useState } from "react";
import ItemComponent from "./item";
import itemData from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let itemCopy = [...itemData];
  itemCopy.sort((a, b) => a.name.localeCompare(b.name));

  const handleSort = (e) => {
    value = e.target.value;
    if (value != "category") {
      setSortBy("category");
    } else if (value != "name") {
      setSortBy("name");
    }
  };

  return (
    <main>
      <ul>
        {itemCopy.map((item) => (
          <li key={item.id}>
            <ItemComponent item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
