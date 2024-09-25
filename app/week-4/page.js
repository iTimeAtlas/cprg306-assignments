"use client"

import { useState } from "react";
import NewItem from "./new-item";


export default function Page() {
    
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }

        
    }

    const decrement = () => {
        if (1 < quantity) {
            setQuantity(quantity - 1);
        }
        
    }
    


    return(
        <main>
            <NewItem quantity={quantity} increment={increment} decrement={decrement}/>
        </main>
    );


}