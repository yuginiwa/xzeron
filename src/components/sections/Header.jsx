import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, MessageCircle, Menu, X, UtensilsCrossed } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UtensilsCrossed className="w-4 h-4 text-orange-200" />
                <span>Professional Catering Services</span>
              </div>
              <span className="text-orange-200">|</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Office Hours: Mon-Sat 8AM-8PM</span>
              <span className="text-orange-200">|</span>
              <span>Emergency: +63 966 875 6031</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <img 
                  src="/xzeron-logo.png" 
                  alt="Xzeron Catering Services Logo" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Xzeron Catering Services</h1>
                <p className="text-sm text-gray-600">Professional Catering Solutions</p>
                <p className="text-xs text-orange-600 font-semibold">"Delicious moments begins here"</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +63 966 875 6031
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
                <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
                <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Menu</a>
                <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Gallery</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    +63 966 875 6031
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
