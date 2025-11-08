import { getCarById } from '@/lib/api/cars'
import React from 'react'
import { ArrowLeft, Calendar, Palette, DollarSign, Car as CarIcon } from 'lucide-react'
import Link from 'next/link'

const page = async({ params }: { params: Promise<{ id: string }> }) => {
  
  try {
    const { id } = await params;
    const car = await getCarById(id)
    
    if (!car) {
      return (
        <div className='min-h-screen bg-black flex items-center justify-center'>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Car Not Found</h1>
            <p className="text-gray-400 mb-8">The car you're looking for doesn't exist.</p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Link>
          </div>
        </div>
      )
    }
    
    return (
    <>
    <div className='min-h-screen bg-black relative overflow-hidden'>
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className='relative z-10 container mx-auto px-6 py-8'>
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-lg hover-glow mb-8 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </Link>

        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Car Image */}
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl overflow-hidden hover-glow">
                <img 
                  src={car.image} 
                  alt={car.make + ' ' + car.model} 
                  className="w-full h-96 object-cover" 
                />
              </div>
              
              {/* Additional Images Placeholder */}
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-dark rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={car.image} 
                      alt={`${car.make} ${car.model} view ${i}`}
                      className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-8">
              <div className="glass-dark rounded-2xl p-8 hover-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 glass-orange rounded-lg">
                    <CarIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold gradient-text">{car.make}</h1>
                    <p className="text-xl text-gray-300">{car.model}</p>
                  </div>
                </div>

                {car.description && (
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {car.description}
                  </p>
                )}

                {/* Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 glass-orange rounded-lg p-4">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-400">Year</p>
                      <p className="text-lg font-semibold text-white">{car.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 glass-orange rounded-lg p-4">
                    <Palette className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-400">Color</p>
                      <p className="text-lg font-semibold text-white capitalize">{car.color}</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between p-6 glass-orange rounded-xl">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-orange-500" />
                    <span className="text-lg text-gray-300">Price</span>
                  </div>
                  <span className="text-3xl font-bold gradient-text">
                    ${car.price?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  } catch (error) {
    console.error('Error loading car:', error)
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Error Loading Car</h1>
          <p className="text-gray-400 mb-8">There was an error loading the car details.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    )
  }
}

export default page