import CarList from '@/components/CarList'
import { getAllCars } from '@/lib/api/cars'

const page = async() => {

  const cars = await getAllCars();
  return (
    <>
    <div className='h-screen  bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-100 text-black'>
      <h1 className='text-3xl font-bold my-4'>List of Cars</h1>
      <CarList cars={cars}/>
    </div>
    </>
  )
}

export default page