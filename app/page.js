import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul class="list-disc list-inside mx-3">
        <li class="hover:text-gray-400">
          <Link href="./week-2">Week 2 Assignment</Link>
        </li>
        <li class="hover:text-gray-400">
          <Link href="./week-3">Week 3 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
