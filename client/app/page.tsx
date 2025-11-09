import HomePageClient from '@/components/HomePageClient'
import { getAllCars } from '@/lib/api/cars'

const page = async() => {
  const cars = await getAllCars();
  return <HomePageClient initialCars={cars} />
}

export default page