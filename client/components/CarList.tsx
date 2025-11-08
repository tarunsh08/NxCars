'use client'

import { Car } from '@/types/car'
import CarCard from './CarCard'
import { useSearch } from '@/contexts/SearchContext'
import { useMemo } from 'react'

const CarList = ({ cars }: { cars: Car[] }) => {
  const { searchQuery } = useSearch()

  // Filter cars based on search query
  const filteredCars = useMemo(() => {
    if (!searchQuery.trim()) {
      return cars
    }

    const query = searchQuery.toLowerCase().trim()
    return cars.filter(car => 
      car.make.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query) ||
      `${car.make} ${car.model}`.toLowerCase().includes(query)
    )
  }, [cars, searchQuery])

  if (filteredCars.length === 0 && searchQuery.trim()) {
    return (
      <div className="text-center py-20">
        <div className="glass-dark rounded-2xl p-12 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">No Cars Found</h3>
          <p className="text-gray-400 mb-6">
            No cars match your search for "{searchQuery}". Try searching for a different car make.
          </p>
          <div className="text-sm text-gray-500">
            <p>Popular makes: BMW, Mercedes, Tesla, Audi, Porsche</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {searchQuery.trim() && (
        <div className="mb-8 text-center">
          <p className="text-gray-300">
            Showing <span className="text-orange-400 font-semibold">{filteredCars.length}</span> 
            {filteredCars.length === 1 ? ' car' : ' cars'} matching 
            "<span className="text-orange-400 font-semibold">{searchQuery}</span>"
          </p>
        </div>
      )}
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {filteredCars.map((car) => (
          <CarCard key={car._id} car={car}/>
        ))}
      </div>
    </>
  )
}

export default CarList