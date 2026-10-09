import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="text-base text-blue-300">
        Go to week 2
      </Link>
      <br />
      <Link href="/week-3" className="text-base text-blue-300">
        Go to week 3
      </Link>
      <br />
      <Link href="/week-4" className="text-base text-blue-300">
        Go to week 4
      </Link>
      <br />
      <Link href="/week-5" className="text-base text-blue-300">
        Go to week 5
      </Link>
    </main>
  );
}
