import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3x1 font-bold text-blue-600">CPRG 306: Web Development 2 - Assignments</h1>
      <p>Click one of the following links:</p>
      <Link href="week-2" className="text-underline text-blue-700">
      Week 2 Assignment
      </Link>
    </main>
  );
}