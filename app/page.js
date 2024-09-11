// remember to run web use powershell and swap to this fold using "cd" command
// then use "npm run dev"

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold font-serif">CPRG 306: Web Development 2 - Assignments</h1>
      <ol>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Dragon Fruit</li>
      </ol>
      <br></br>
      <Link className="text-blue-400 hover:text-yellow-400" href="./week-2">Second Page</Link>
    </main>    
  );
}
