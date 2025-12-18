import Link from 'next/link';
import SearchFilter from './SearchFilter';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  horsepower: number;
  engine: string;
  image: string;
}

// Async funkcija za dohvat podataka iz vanjskog API-ja
async function getCars(): Promise<Car[]> {
  try {
    // Dohvaćamo automobile iz našeg API endpointa koji fetcha iz vanjskog servisa
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/cars`, {
      cache: 'no-store', // Uvijek svježi podaci
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
}

// Server Component
export default async function VehicleSearch() {
  const cars = await getCars();

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Vehicle Search</h1>
      <p className="text-lg mb-4">Search for vehicles in our database.</p>
      
      {/* Client Component za search - interaktivnost */}
      <SearchFilter cars={cars} />
    </div>
  );
}
