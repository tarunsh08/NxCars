import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
        <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
            <div className='flex items-center gap-2'>
                <Image src="/globe.svg" alt='Logo' width={40} height={40}/>
                <h1 className='font-extrabold text-xl text-neutral-600'>NxCar</h1>
            </div>
            <SearchBar/>
        </nav>
    </>
  )
}

export default Navbar