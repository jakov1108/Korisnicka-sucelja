import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Vehicle Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        The vehicle you are looking for does not exist or has been removed.
      </p>
      <Link 
        href="/vehicle-search" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back to Vehicle Search
      </Link>
    </div>
  );
}
