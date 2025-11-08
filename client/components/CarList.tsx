import { Car } from '@/types/car'
import CarCard from './CarCard'

const CarList = ({ cars }: { cars: Car[] }) => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {cars.map((car) => (
        <CarCard key={car._id} car={car}/>
      ))}
    </div>
    </>
  )
}

export default CarList