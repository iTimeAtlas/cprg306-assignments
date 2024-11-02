"use-client";

import { useState } from "react";

export default function NewItem({onAddItem}) {


  // STATES
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  

  const nameChange = (event) => {
    setName(event.target.value);
  }; 

  const upQChange = (event) => {
    // event.preventDefault();
      if (quantity < 20) {
          setQuantity(quantity + 1);
      }

      
  }

  const downQChange = (event) => {
    // event.preventDefault();
      if (1 < quantity) {
          setQuantity(quantity - 1);
      }
      
  }

  const categoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let itemInfo = {
      itemName: name,
      itemCount: quantity,
      itemCat: category

    };

    onAddItem(`
      ID: ${generateRandomString()}
      Name: ${itemInfo.itemName}
      Quantity: ${itemInfo.itemCount}
      Category: ${itemInfo.itemCat}
      `);
  }
  

  // STYLES
  let buttonIncrease =
    "bg-blue-400 hover: bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

  let buttonDecrease =
    "bg-red-400 hover: bg-red-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

  let titleTextStyle = "text-lg font-bold italic";

  if (quantity >= 20) {
    buttonIncrease = "bg-gray-400 rounded text-white mt-5 px-4 py-2";
  }

  if (quantity <= 1) {
    buttonDecrease = "bg-gray-400 rounded text-white mt-5 px-4 py-2";
  }



  

  return (
    <form onSubmit={handleSubmit} className="bg-blue-800 p-4">
        <p input="text" className={titleTextStyle}>Name: {name}</p>
       <input type="text" className="text-black" onChange={nameChange}></input>

      <p className={titleTextStyle}>Quantity: {quantity}</p>
      <button type="button" onClick={upQChange} className={buttonIncrease}>
        +
      </button>
      <button type="button" onClick={downQChange} className={buttonDecrease}>
        -
      </button>

      <p className={titleTextStyle}>Category: {category}</p>
      <select className="text-black" onChange={categoryChange}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen Foods">Frozen Food</option>
        <option value="Canned Goods">Canned Goods</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
