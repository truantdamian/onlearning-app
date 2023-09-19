import Link from "next/link";

export default function Page() {
  return (
    <>
      <header>
        <h1>on-learning</h1>
      </header>
      <main>
        <div>
          <Link href="/student">Quiero Aprender</Link>
          <Link href="/teacher">Quiero Enseñar</Link>
        </div>
      </main>
    </>
  );
}
