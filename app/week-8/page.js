"use client";

import { useState } from "react";
import mealIdeas from "./meal-ideas.js";
import NewItem from './new-item';
import ItemList from './item-list';
import itemData from './items.json';


export default function Page() {
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null); 

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (item) => {
        const itemNewName = item.name
        .split(",")[0]
        .trim()
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItem(itemNewName);

    }


return (
    <main>
        <h1 className="text-center font-bold text-white text-4xl">Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onSelect={handleItemSelect} />

        <div>
        <mealIdeas ingredient={selectedItem} />

        </div>
    </main>
    )
}