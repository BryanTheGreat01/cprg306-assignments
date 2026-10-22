"use client";

import Item from "./item";
import { useState } from "react";

// component that takes an array of items and maps them to a list of Item components
const ListItems = ({ items }) => {

  return (
    <ul>
      {items.map((items) => (
        <li key={items.id}>
          <Item
            name={items.name}
            quantity={items.quantity}
            category={items.category}
          />
        </li>
      ))}
    </ul>
  );
};

export default function ItemList( {items} ) {
  // state to keep track of the sortBy and groupBy values
  const [sortBy, setSortBy] = useState("name");
  const [groupBy, setGroupBy] = useState(false);

  // create a copy of the items array so original data is not mutated
  let itemsCopy = [...items];

  

  // get all unique categories from the itemsCopy array and sort them alphabetically
  const allCategories = itemsCopy.map((item) => item.category);
  const categories = allCategories
    .filter((category, index) => allCategories.indexOf(category) === index)
    .sort((a, b) => a.localeCompare(b));

  // sort the itemsCopy array based on the sortBy state
  if (sortBy === "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  }

  // handle button click to set the sortBy and groupBy state
  const handleButtonClick = (sortByValue, groupByValue) => {
    setSortBy(sortByValue);
    setGroupBy(groupByValue);
  };

  return (
    <div className="flex flex-col w-96 mx-auto">
      <div className="flex flex-row gap-2 justify-between w-auto ">
        <button
          type="button"
          id="sort-by-name-button"
          className={`flex-1 p-1 font-bold rounded text-white  disabled:bg-slate-400 hover:bg-blue-400 text-wrap ${sortBy == "name" && groupBy == false ? "bg-blue-600" : "bg-blue-900"}`}
          onClick={() => handleButtonClick("name", false)}
        >
          Sort by Name
        </button>
        <button
          type="button"
          id="sort-by-quantity-button"
          className={`flex-1 p-1 font-bold rounded text-white  disabled:bg-slate-400 hover:bg-blue-400 text-wrap ${sortBy == "category" && groupBy == false ? "bg-blue-600" : "bg-blue-900"}`}
          onClick={() => handleButtonClick("category", false)}
        >
          Sort by Category
        </button>
        <button
          type="button"
          id="sort-by-quantity-button"
          className={`flex-1 p-1 font-bold rounded text-white  disabled:bg-slate-400 hover:bg-blue-400 text-wrap ${sortBy == "name" && groupBy == true ? "bg-blue-600" : "bg-blue-900"}`}
          onClick={() => handleButtonClick("name", true)}
        >
          Group by Category
        </button>
      </div>
      <div className="">
        {
          /* if groupBy is true, sort items by category and wrap them in a container with the category name as the header */
          groupBy ? (
            categories.map((category) => (
              <div key={category} className="px-3 py-1 my-4 bg-slate-100 border-2 border-slate-200 rounded ">
                <h2 className="pt-3 font-semibold text-blue-600 text-l">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                <ListItems
                  items={itemsCopy.filter(
                    (item) => item.category === category,
                  )}
                />
              </div>
            ))
          ) : (
            /* if groupBy is false, just render the list of items without grouping them by category */
            <ListItems items={itemsCopy} />
          )
        }
      </div>
    </div>
  );
}
