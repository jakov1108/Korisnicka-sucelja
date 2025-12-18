import SearchFilter from './SearchFilter';
import { fetchCarsFromAPI, Car } from '@/app/lib/cars';

// Označavamo stranicu kao dinamičku
export const dynamic = 'force-dynamic';

// Server Component
export default async function VehicleSearch() {
  const cars = await fetchCarsFromAPI();

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Vehicle Search</h1>
      <p className="text-lg mb-4">Search for vehicles in our database.</p>
      
      {/* Client Component za search - interaktivnost */}
      <SearchFilter cars={cars} />
    </div>
  );
}
