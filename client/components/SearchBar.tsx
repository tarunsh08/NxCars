import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <>
    <div className='flex border rounded-lg overflow-hidden border-2-black text-black px-4'>
      <input
        type="text"
        placeholder="Search cars..."
        className="px-3 py-2 outline-none"
      />
      <button className='cursor-pointer'><Search/></button>
    </div>
    </>
  )
}

export default SearchBar