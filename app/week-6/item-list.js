"use client";

import { useState } from "react";
import itemData from "./items.json";
import item from "./item";

export default function ItemList() {

    // Stylings
    let buttonStyling = "px-3 py-3 bg-slate-400 text-black";

  const [sortBy, setSortBy] = useState("name");

  let newItemList = itemData.map((item) => item);
  console.dir(newItemList);

  const sortByName = (event) => {
    newItemList.sort((a, b) => a.name.localeCompare(b.name));
    setSortBy("name");
  };

  const sortByCategory = (event) => {
    newItemList.sort((a, b) => a.category.localeCompare(b.category));
    setSortBy("category");
  };

  if (sortBy == "name") {
    newItemList.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy == "category") {
    newItemList.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <h1>Week 6</h1>
      <button type="button" onClick={sortByName} className={buttonStyling}>
        Sort By: NAME
      </button>
      <button type="button" onClick={sortByCategory} className={buttonStyling}>
        Sort By: CATEGORY
      </button>
      <ul>
        {newItemList.map((item) => (
          <li key={item.id} className="py-1 bg-green-700">
            <h2>Name: {item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
            <hr className="py-1"/>
          </li>
        ))}
      </ul>
    </div>
  );
}
