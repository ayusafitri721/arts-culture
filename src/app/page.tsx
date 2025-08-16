import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TEST</h1>
      <br />
      {/* memudahkan routenya */}
      <Link href="/posts">POSTINGAN PAGE</Link>
      <br />
      <Link href="/albums">ALBUM PAGE</Link>
    </>
  );
}
