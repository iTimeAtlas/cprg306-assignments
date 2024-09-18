

export default function Item({itemObj}){

    let {name, quantity, category} = itemObj;

    let pStyle = "text-2x1";

    return(
        <div className="bg-slate-500 border-2">
            <h2 className="text-4x1 text-yellow-300">Name: {name}</h2>
            <p className={pStyle}>Quantity: {quantity}</p>
            <p className={pStyle}>Category: {category}</p>
        </div>
    );
}