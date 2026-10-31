import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3x1 font-bold text-blue-600">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p>Click one of the following links:</p>
      <Link href="./week-2" className="text-underline text-white">
        Week 2 Assignment
      </Link>
      <br></br>
      <Link href="./week-3" className="text-underline text-white">
        Week 3 Assignment
      </Link>
      <br></br>
      <Link href="./week-4" className="text-underline text-white">
        Week 4 Assignment
      </Link>
      <br></br>
      <Link href="./week-5" className="text-underline text-white">
        Week 5 Assignment
      </Link>
      <br></br>
      <Link href="./week-6" className="text-underline text-white">
        Week 6 Assignment
      </Link>
      <br></br>
      <Link href="./week-7" className="text-underline text-white">
        Week 7 Assignment
      </Link>
    </main>
  );
}
