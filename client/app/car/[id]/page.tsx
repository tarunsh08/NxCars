import { getCarById } from '@/lib/api/cars'
import React from 'react'

const page = async({ params }: { params: { id: string } }) => {
  
  const car = await getCarById(params.id)
  return (
    <>
    <div className='max-w-4xl mx-auto p-4'>
      <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{car.name}</h1>
      <p className="text-gray-700 mt-2">{car.description}</p>
      <p className="mt-4 font-semibold text-lg">Price: ${car.price}</p>
    </div>
    </>
  )
}

export default page