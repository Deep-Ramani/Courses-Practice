import React from 'react';
import Link from 'next/link';
export default function Navigationbar() {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/posts'>Posts</Link>
    </nav>
  );
}
