import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  horsepower: number;
  engine: string;
  image: string;
  topSpeed: number;
  acceleration: number;
  transmission: string;
  drivetrain: string;
  fuelType: string;
}

// Async funkcija za dohvat podataka iz vanjskog API-ja
async function getCar(id: string): Promise<Car | null> {
  try {
    // Dohvaćamo auto iz našeg API endpointa
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/cars/${id}`, {
      cache: 'no-store', // Uvijek svježi podaci
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching car:', error);
    return null;
  }
}

// Server Component - nema 'use client'
export default async function CarDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const car = await getCar(id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <Link href="/vehicle-search" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Vehicle Search
      </Link>

      {/* Car Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{car.brand} {car.model}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{car.year}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Car Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Car Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          
          <div className="space-y-4">
            {[
              ['Engine', car.engine],
              ['Horsepower', `${car.horsepower} HP`],
              ['Top Speed', `${car.topSpeed} km/h`],
              ['0-100 km/h', `${car.acceleration}s`],
              ['Transmission', car.transmission],
              ['Drivetrain', car.drivetrain],
              ['Fuel Type', car.fuelType],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-gray-600 dark:text-gray-400">{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Starting Price</p>
            <p className="text-3xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
