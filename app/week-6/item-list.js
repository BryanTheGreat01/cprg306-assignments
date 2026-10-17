"use client";
import itemData from "./items.json";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList()
{
    const [sortBy, setSortBy] = useState("name");

    let itemCopy = [...itemData];
    itemCopy.sort((a, b) => a.[sortBy].localCompare(b[sortBy]));

    const handleClick = (e) => {
        const value = e.target.value;
        setSortBy(value);
    };

    return(
    <main>
        <div className="display-flex 12px justify-center flex-wrap rounded">
            <button
            value="name"
            onClick={handleClick}>
                Sort By Name
            
            </button>

            <button
            value="category"
            onClick={handleClick}>
                Sort By Category
            </button>
        </div>
        
        <div>
            <ul>
                itemCopy.map((item) => (
                    <li key={Item.id}>
                    <Item item={Item} />
                    </li>
                )
            </ul>
        </div>
    </main>
    )
}