import { NextResponse } from 'next/server';

// Definicija tipa za auto
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

// Funkcija za dohvaćanje svih automobila iz glavnog API-ja
async function fetchAllCars(): Promise<Car[]> {
  try {
    // Dohvaćamo automobile iz našeg glavnog API endpointa
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/cars`, { 
      cache: 'no-store' 
    });
    
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const carId = parseInt(id);
  
  const cars = await fetchAllCars();
  const car = cars.find((c: Car) => c.id === carId);
  
  if (!car) {
    return NextResponse.json(
      { error: 'Car not found' },
      { status: 404 }
    );
  }
  
  // Vrati sliku veće rezolucije za detail page
  const carWithLargeImage = {
    ...car,
    image: car.image.replace('/400/250', '/800/500')
  };
  
  return NextResponse.json(carWithLargeImage);
}
