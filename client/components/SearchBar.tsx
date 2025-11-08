'use client'

import { Search, X } from 'lucide-react'
import { useSearch } from '@/contexts/SearchContext'
import { useState, useEffect } from 'react'

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch()
  const [localQuery, setLocalQuery] = useState(searchQuery)

  // Update local query when context changes
  useEffect(() => {
    setLocalQuery(searchQuery)
  }, [searchQuery])

  const handleSearch = () => {
    setSearchQuery(localQuery.trim())
  }

  const handleClear = () => {
    setLocalQuery('')
    setSearchQuery('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalQuery(value)
    
    // Real-time search as user types
    if (value.trim() === '') {
      setSearchQuery('')
    } else {
      // Debounce the search to avoid too many updates
      const timeoutId = setTimeout(() => {
        setSearchQuery(value.trim())
      }, 300)
      
      return () => clearTimeout(timeoutId)
    }
  }

  return (
    <>
    <div className='flex items-center glass-dark rounded-lg overflow-hidden border border-orange-500/30 hover:border-orange-500/50 focus-within:border-orange-500 transition-all duration-300'>
      <input
        type="text"
        placeholder="Search by car make (e.g., BMW, Tesla, Mercedes)..."
        value={localQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none flex-1 min-w-[300px]"
      />
      
      {localQuery && (
        <button 
          onClick={handleClear}
          className='px-2 py-3 text-gray-400 hover:text-white transition-all duration-300'
          title="Clear search"
        >
          <X className="w-4 h-4"/>
        </button>
      )}
      
      <button 
        onClick={handleSearch}
        className='px-4 py-3 text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300'
        title="Search"
      >
        <Search className="w-5 h-5"/>
      </button>
    </div>
    </>
  )
}

export default SearchBar