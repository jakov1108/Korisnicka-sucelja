// Definicija tipa za auto
export interface Car {
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

// Cache za automobile da ne fetchamo svaki put
let cachedCars: Car[] | null = null;

function generateEngine(): string {
  const engines = [
    '2.0L Turbo I4',
    '3.0L Twin-Turbo I6',
    '4.0L V8 Biturbo',
    '2.5L Hybrid',
    '3.5L V6',
    '5.0L V8',
    'Electric Motor'
  ];
  return engines[Math.floor(Math.random() * engines.length)];
}

// Funkcija za dohvaćanje automobila iz vanjskog API-ja
export async function fetchCarsFromAPI(): Promise<Car[]> {
  if (cachedCars) {
    return cachedCars;
  }

  try {
    // Koristimo NHTSA API za dohvaćanje modela za različite proizvođače
    const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Toyota', 'Ford'];
    const cars: Car[] = [];
    let id = 1;

    for (const brand of brands) {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(brand)}?format=json`
      );
      
      if (response.ok) {
        const data = await response.json();
        const models = data.Results?.slice(0, 2) || []; // Uzmi do 2 modela po marki
        
        for (const model of models) {
          // Generiramo dodatne podatke jer NHTSA API ne vraća sve detalje
          const car: Car = {
            id: id++,
            brand: model.Make_Name || brand,
            model: model.Model_Name || 'Unknown',
            year: 2020 + Math.floor(Math.random() * 5), // 2020-2024
            price: Math.floor(30000 + Math.random() * 100000),
            horsepower: Math.floor(200 + Math.random() * 400),
            engine: generateEngine(),
            image: `https://picsum.photos/seed/${model.Model_Name?.toLowerCase().replace(/\s/g, '') || id}/400/250`,
            topSpeed: Math.floor(200 + Math.random() * 100),
            acceleration: parseFloat((3 + Math.random() * 4).toFixed(1)),
            transmission: Math.random() > 0.5 ? '8-speed Automatic' : '6-speed Manual',
            drivetrain: ['RWD', 'AWD', 'FWD'][Math.floor(Math.random() * 3)],
            fuelType: Math.random() > 0.8 ? 'Electric' : 'Petrol'
          };
          cars.push(car);
        }
      }
    }

    // Ako API ne vrati dovoljno podataka, dodaj fallback automobile
    if (cars.length < 6) {
      const fallbackResponse = await fetch('https://freetestapi.com/api/v1/cars');
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        for (const item of fallbackData.slice(0, 10 - cars.length)) {
          cars.push({
            id: id++,
            brand: item.make || 'Unknown',
            model: item.model || 'Unknown',
            year: item.year || 2023,
            price: item.price || Math.floor(30000 + Math.random() * 100000),
            horsepower: item.horsepower || Math.floor(200 + Math.random() * 400),
            engine: item.engine || generateEngine(),
            image: item.image || `https://picsum.photos/seed/car${id}/400/250`,
            topSpeed: Math.floor(200 + Math.random() * 100),
            acceleration: parseFloat((3 + Math.random() * 4).toFixed(1)),
            transmission: item.transmission || '8-speed Automatic',
            drivetrain: item.drivetrain || 'RWD',
            fuelType: item.fuelType || 'Petrol'
          });
        }
      }
    }

    cachedCars = cars;
    return cars;
  } catch (error) {
    console.error('Error fetching cars from API:', error);
    return [];
  }
}

// Funkcija za dohvaćanje jednog automobila po ID-u
export async function fetchCarById(id: number): Promise<Car | null> {
  const cars = await fetchCarsFromAPI();
  const car = cars.find(c => c.id === id);
  
  if (!car) {
    return null;
  }
  
  // Vrati sliku veće rezolucije za detail page
  return {
    ...car,
    image: car.image.replace('/400/250', '/800/500')
  };
}
