import { Car } from '@/types/car'
import Link from 'next/link'

const CarCard = ({ car }: { car: Car }) => {
  return (
    <>
      <Link href="/">
        <div className='border-2 rounded-lg  p-3 hover-shadow-lg transition'>
          <img src={car.image} alt={car.model} className="w-full h-40 object-cover rounded-md" />
        </div>
      </Link>
    </>
  )
}

export default CarCard