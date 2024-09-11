import Link from "next/link";
import StudentInfo from "./student-info";



export default function Page() {
    return(
        <main>
            <StudentInfo/>
            <h1>Shopping List</h1>
            <br></br>
            <Link className="text-blue-400 hover:text-yellow-400" href="./">Back to homepage</Link>
        </main>
    );
}