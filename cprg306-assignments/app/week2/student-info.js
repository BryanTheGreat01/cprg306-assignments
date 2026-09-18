import Link from "next/link";
export default function StudentInfo(){
    return(
        <main>
            <p>Student name: Dami Egbonwon</p> 
            <Link href="https://github.com/BryanTheGreat01/cprg306-assignments.git" className="text-underline text-blue-400"> Go to my repo </Link>
        </main>
    )
}