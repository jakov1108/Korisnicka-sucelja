import Link from 'next/link';

export default function VehicleSearch() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Vehicle Search</h1>
      <p className="text-lg mb-4">Search for vehicles in our database.</p>
      <div className="mt-8">
        <Link href="/vehicle-search/model" className="text-blue-600 hover:underline">
          View Model Page →
        </Link>
      </div>
    </div>
  );
}
