import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-gold-dark to-brown-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gold-accent">★</span>
                <span>Licensed & Professional Catering Service</span>
              </div>
              <span className="text-gold-light">|</span>
              <span>BLK22 lot 1 Verdant Residences BRGY. Sabang NAIC Cavite</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Available: Mon-Sun 8AM-8PM</span>
              <span className="text-gold-light">|</span>
              <span>Contact: 09668756031</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-lg flex items-center justify-center">
                <img 
                  src="/xzeron-logo.png" 
                  alt="Xzeron Catering Services Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-brown-primary">Xzeron Catering Services</h1>
                <p className="text-sm text-gray-600">Delicious moments begins here</p>
                <p className="text-xs text-gold-primary font-semibold">Complete & Customized Catering Solutions</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Services</a>
              <a href="#menu" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                09668756031
              </Button>
              <Button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Free Quote
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
                <a href="#about" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">About</a>
                <a href="#services" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Services</a>
                <a href="#menu" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Menu</a>
                <a href="#gallery" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Gallery</a>
                <a href="#testimonials" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-gold-primary transition-colors font-medium">Contact</a>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    09668756031
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Free Quote
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
