import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">📝</span>
          <span className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
            My Blog
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
            Posts
          </Link>
          <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
            Categories
          </Link>
          <Link href="/authors" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  );
}