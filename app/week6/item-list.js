import { useState } from "react";
import Item from "./item";
import Items from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let newList = [...Items];

  newList.sort((a, b) => a.sortBy.localeCompare(b.sortBy));
}
