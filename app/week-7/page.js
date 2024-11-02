"use client";

import ItemList from "./item-list";
import NewItem from "./item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){

    const [items, setItems] = useState(
        itemsData.map((item) => ({...item}))
    );

    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    };

    return(
        <main>
            <h1>Week 6</h1>
            <h1>Shopping List</h1>
            <ItemList items={items}/>
        </main>
    );

}