import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){

    return(
        <main>
            <h2 className="text-4xl">Shopping List</h2>
            <ItemList/>
            <br></br>
            <Link className="text-blue-400 hover:text-yellow-400" href="./">Back to homepage</Link>
        </main>
    );
}