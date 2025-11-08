'use client'

import { Car } from '@/types/car'
import CarList from './CarList'
import HeroSection from './HeroSection'

interface HomePageClientProps {
    cars: Car[]
}

const HomePageClient = ({ cars }: HomePageClientProps) => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Cars Collection Section */}
            <section id="cars" className='relative bg-black py-20'>
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                ></div>

                <div className='relative z-10 container mx-auto px-6'>
                    <div className='text-center mb-16'>
                        <h2 className='text-5xl font-bold mb-6 gradient-text'>
                            Featured Collection
                        </h2>
                        <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                            Handpicked luxury and performance vehicles from the world's finest manufacturers
                        </p>
                    </div>

                    {cars.length > 0 ? (
                        <CarList cars={cars} />
                    ) : (
                        <div className="text-center py-20">
                            <div className="glass-dark rounded-2xl p-12 max-w-md mx-auto">
                                <h3 className="text-2xl font-bold text-white mb-4">No Cars Available</h3>
                                <p className="text-gray-400 mb-6">Be the first to add a premium vehicle to our collection.</p>
                                <a
                                    href="/add-car"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                                >
                                    Add First Car
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default HomePageClient