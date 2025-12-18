import { NextResponse } from 'next/server';
import { fetchCarsFromAPI } from '@/app/lib/cars';

// Označavamo rutu kao dinamičku
export const dynamic = 'force-dynamic';

export async function GET() {
  const cars = await fetchCarsFromAPI();
  return NextResponse.json(cars);
}
