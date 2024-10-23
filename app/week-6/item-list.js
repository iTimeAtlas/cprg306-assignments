"use client";

import { useState } from "react";
import itemData from "./items.json";
import Item from "./item";

export default function ItemList() {

    /*
    const [itemList, setItemList] = useState(
        reqData.map((item) => ({...item}))
    );
    */

   let newItemList = [];
   newItemList = itemData.map((item) => ({item}));

   /*
   if (itemData.length > 0) {
    for (let i = 0; i < itemData.length; i++ ){
        newItemList[i] = itemData[i];
    }
   };
    */

    return(
        <div>
            <h1>{newItemList}</h1>
        </div>
    );
}