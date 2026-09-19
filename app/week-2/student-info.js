import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Noah</h1>
      <Link
        href="https://github.com/BryanTheGreat01/cprg306-assignments"
        className="text-blue-400 underline"
      >
        Github Repo
      </Link>
    </main>
  );
}
