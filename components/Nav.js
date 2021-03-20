import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="about">About</Link>
      <Link href="search">Search</Link>
      <Link href="bildergalerie">Bildergalerie</Link>
    </nav>
  );
}