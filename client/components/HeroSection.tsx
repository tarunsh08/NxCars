import { ArrowRight, Star, Users, Car } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const stats = [
    { icon: Car, label: 'Premium Cars', value: '500+' },
    { icon: Users, label: 'Happy Customers', value: '10K+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
  ]

  return (
    <section className="relative h-full py-6 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-orange px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">Premium used Car Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="gradient-text">Magical vehicles</span>
            <br />
            <span className="text-white">By NxCar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the world's most exclusive vehicles. From luxury sedans to high-performance sports cars, 
            find your perfect match in our curated collection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link 
              href="#cars" 
              className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/add-car" 
              className="flex items-center gap-3 glass-dark border border-orange-500/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              List Your Car
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-dark rounded-xl p-6 hover-glow transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 glass-orange rounded-lg">
                    <stat.icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection