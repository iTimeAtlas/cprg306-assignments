"use-client"


export default function NewItem({quantity, increment, decrement}) {

    let buttonIncrease = "bg-blue-400 hover: bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    let buttonDecrease = "bg-red-400 hover: bg-red-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    if (quantity >= 20) {
        buttonIncrease = "bg-gray-400 rounded text-white mt-5 px-4 py-2";
    }

    if (quantity <= 1) {
        buttonDecrease = "bg-gray-400 rounded text-white mt-5 px-4 py-2";
    }

    return(
        <div>
            <p className="text-lg font-bold italic">Quantity: {quantity}</p>
            <button onClick={increment} className={buttonIncrease}>+</button><button onClick={decrement} className={buttonDecrease}>-</button>
        </div>
    );

}