'use client';

import Link from 'next/link';
import { useState } from 'react';

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

interface SearchFilterProps {
  cars: Car[];
}

export default function SearchFilter({ cars }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car => 
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by brand or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <Link 
            key={car.id} 
            href={`/vehicle-search/${car.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={car.image} 
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.brand} {car.model}</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-1">
                <p>Year: {car.year}</p>
                <p>Horsepower: {car.horsepower} HP</p>
                <p className="text-lg font-semibold text-blue-600">${car.price.toLocaleString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredCars.length === 0 && (
        <p className="text-center text-gray-500 py-8">No vehicles found matching your search.</p>
      )}
    </>
  );
}
