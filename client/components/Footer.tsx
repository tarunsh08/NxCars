import { Car, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 glass-orange rounded-lg">
                <Car className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">NxCar</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your premier destination for luxury and performance vehicles. 
              Discover exceptional cars with unmatched quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Add Car', 'About Us', 'Contact'].map((link) => (
                <Link 
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <div className="space-y-2">
              {['Luxury Cars', 'Sports Cars', 'SUVs', 'Electric Vehicles'].map((category) => (
                <Link 
                  key={category}
                  href="#"
                  className="block text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@nxcar.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>123 NxCar, Gurugram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NxCar. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer