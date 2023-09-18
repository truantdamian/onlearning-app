import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>on-learning</h1>
      <Link href="/student">Quiero Aprender</Link>
      <Link href="/teacher">Quiero Enseñar</Link>
    </>
  );
}
