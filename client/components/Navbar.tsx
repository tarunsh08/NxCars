import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { Plus, Car } from 'lucide-react'

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-orange-500/20">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className='flex items-center gap-3 hover-glow rounded-lg px-3 py-2'>
                        <div className="p-2 glass-orange rounded-lg">
                            <Car className="w-6 h-6 text-orange-500" />
                        </div>
                        <h1 className='font-extrabold text-2xl gradient-text'>NxCar</h1>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <SearchBar/>
                        <Link 
                            href="/add-car" 
                            className="flex items-center gap-2 glass-orange px-4 py-2 rounded-lg hover-glow transition-all duration-300"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="font-medium">Add Car</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        {/* Spacer for fixed navbar */}
        <div className="h-20"></div>
    </>
  )
}

export default Navbar