import Link from 'next/link';

export default function Compare() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Compare</h1>
      <p className="text-lg mb-6">Compare two vehicles side by side.</p>
      
      <div className="space-y-4">
        <div>
          <Link href="/compare/select-car-1" className="text-blue-600 hover:underline text-lg">
            Select Car 1 →
          </Link>
        </div>
        <div>
          <Link href="/compare/select-car-2" className="text-blue-600 hover:underline text-lg">
            Select Car 2 →
          </Link>
        </div>
      </div>
    </div>
  );
}
