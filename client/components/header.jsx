import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
  return (
    <header className="header">
      <h1>Cruceros</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/credit">Credit</Link>
      </nav>
    </header>
  );
}
