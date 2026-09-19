import Link from "next/link";

export default function StudentInfo(){
    return (
        <main>
            <h1>Kayte Orac</h1>
            <Link href="https://github.com/kayteorac" className="text-underline text-blue-700">Click here to go to Github profile!</Link>
        </main>
    );
}