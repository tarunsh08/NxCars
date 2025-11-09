'use client'

import { Car } from '@/types/car'
import Link from 'next/link'
import { Eye, DollarSign, Calendar, Palette, Trash2 } from 'lucide-react'
import { deleteCarById } from '@/lib/api/cars'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const CarCard = ({ car }: { car: Car }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const router = useRouter()

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation to car details
    e.stopPropagation()

    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true)
      return
    }

    setIsDeleting(true)
    try {
      await deleteCarById(car._id)
      // Refresh the page to show updated car list
      router.refresh()
    } catch (error) {
      console.error('Error deleting car:', error)
      alert('Failed to delete car. Please try again.')
    } finally {
      setIsDeleting(false)
      setShowDeleteConfirm(false)
    }
  }

  const cancelDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <div className='group glass-dark rounded-xl overflow-hidden transition-all duration-500 relative'>
        <Link href={`/car/${car._id}`}>
          <div className="relative overflow-hidden">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="glass-orange p-3 rounded-full hover:scale-110 transition-transform duration-200">
                <Eye className="w-5 h-5 text-orange-400" />
              </div>
            </div>

            {/* Delete Button */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="glass-dark px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-orange-400">{car.year}</span>
              </div>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`p-2 rounded-full transition-all duration-300 ${showDeleteConfirm
                  ? 'bg-red-500/80 hover:bg-red-600/80'
                  : 'glass-dark hover:bg-red-500/20'
                  } ${isDeleting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
                title={showDeleteConfirm ? 'Click again to confirm delete' : 'Delete car'}
              >
                {isDeleting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Trash2 className={`w-4 h-4 ${showDeleteConfirm ? 'text-white' : 'text-red-400'}`} />
                )}
              </button>
              {showDeleteConfirm && (
                <button
                  onClick={cancelDelete}
                  className="p-2 glass-dark rounded-full hover:bg-gray-500/20 transition-all duration-300"
                  title="Cancel delete"
                >
                  <span className="text-gray-400 text-sm">✕</span>
                </button>
              )}
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-orange-400 font-medium uppercase tracking-wider">Premium</span>
              </div>
            </div>
          </div>
        </Link>

        <Link href={`/car/${car._id}`}>
          <div className="p-6 space-y-4">
            {/* Title */}
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-1">
                {car.make}
              </h3>
              <p className="text-gray-300 text-lg">{car.model}</p>
            </div>

            {/* Specs */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Palette className="w-3 h-3" />
                <span className="capitalize">{car.color}</span>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-orange-500" />
                <span className="text-xl font-bold gradient-text">
                  ${car.price?.toLocaleString()}
                </span>
              </div>

              <div className="px-4 py-2 glass-orange rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                <span className="text-sm font-medium text-orange-300">View Details</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Delete Confirmation Overlay */}
        {showDeleteConfirm && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
            <div className="glass-dark p-6 rounded-lg text-center max-w-xs">
              <h3 className="text-white font-semibold mb-2">Delete Car?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Are you sure you want to delete this {car.make} {car.model}?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-300 disabled:opacity-50"
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
                <button
                  onClick={cancelDelete}
                  className="flex-1 py-2 glass-orange text-orange-400 rounded-lg font-medium hover:bg-orange-500/20 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl shadow-glow-lg"></div>
        </div>
      </div>
    </>
  )
}

export default CarCard