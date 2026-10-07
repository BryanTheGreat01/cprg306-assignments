import Link from "next/link";

export default function Home() {
 let weeks = [1,2,3,4,5]
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      {weeks.map(week => {
        return <Link href={`/week-${week}`} className="text-base text-blue-300 block">Go to week {week}</Link>
      })}
    </main>
  );
}
