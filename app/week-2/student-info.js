import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1 className="text-cyan-600 font-bold text-4xl">Sean Ma</h1>
      <Link
        className="text-blue-500 hover:text-yellow-300 text-3xl"
        href="https://github.com/iTimeAtlas"
      >
        iTimeAtlas
      </Link>
    </main>
  );
}
