"use client";

import { useState } from "react";
import NewItem from './new-item';
import ItemList from './item-list';
import itemData from './items.json';


export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }


return (
    <main>
        <h1 className="text-center font-bold text-white text-4xl">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
    </main>
    )
}