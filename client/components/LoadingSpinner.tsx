const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Aurora Background */}
        <div className="aurora"></div>
        <div className="aurora aurora-2"></div>
        
        {/* Spinner */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-semibold gradient-text mb-2">Loading</h2>
            <p className="text-gray-400">Fetching premium vehicles...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner