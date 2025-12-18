import { NextResponse } from 'next/server';
import { fetchCarById } from '@/app/lib/cars';

// Označavamo rutu kao dinamičku
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const carId = parseInt(id);
  
  const car = await fetchCarById(carId);
  
  if (!car) {
    return NextResponse.json(
      { error: 'Car not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(car);
}
