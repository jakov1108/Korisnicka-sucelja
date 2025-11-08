import Link from 'next/link';

export default function Feed() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Feed</h1>
      <p className="text-lg mb-6">Discover new vehicles.</p>
      
      <div className="space-y-4">
        <div>
          <Link href="/feed/recently-added" className="text-blue-600 hover:underline text-lg">
            Recently Added →
          </Link>
        </div>
        <div>
          <Link href="/feed/cars-you-might-like" className="text-blue-600 hover:underline text-lg">
            Cars You Might Like →
          </Link>
        </div>
      </div>
    </div>
  );
}
