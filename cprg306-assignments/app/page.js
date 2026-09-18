import Link from "next/link";
export default function Page() {
    return(
        <main>
            <h1> CPRG 306: Web Development 2 -Assignments</h1>
            <Link href="/week2">
                <button className="text-underline text-blue-400"> Week-2 content</button>
            </Link>
        </main>
    )
}