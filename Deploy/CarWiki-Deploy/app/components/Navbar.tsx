import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Car Database
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/vehicle-search" className="hover:text-gray-300 transition-colors">
              Vehicle Search
            </Link>
          </li>
          <li>
            <Link href="/feed" className="hover:text-gray-300 transition-colors">
              Feed
            </Link>
          </li>
          <li>
            <Link href="/compare" className="hover:text-gray-300 transition-colors">
              Compare
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 transition-colors">
              Login/Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
