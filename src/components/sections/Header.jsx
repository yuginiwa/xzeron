import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Xzeron Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark rounded-lg flex items-center justify-center">
              <img 
                src="/xzeron-logo.png" 
                alt="Xzeron Catering Services Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-brown-primary">Xzeron</h1>
              <p className="text-xs text-gray-800">Catering Services</p>
            </div>
          </div>
          
          {/* Center: Primary Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-900 hover:text-gold-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Book Now Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-brown-primary px-6 py-2">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-900 hover:text-gold-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-brown-primary">
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
