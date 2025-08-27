import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageSquare, Heart, ChefHat } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-brown-primary to-gold-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo + Tagline */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Xzeron Catering Services</h3>
                <p className="text-gray-300">Delicious moments begins here</p>
                <p className="text-sm text-gold-light">Complete & Customized Catering Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Creating delicious moments, one celebration at a time. We provide complete and customized catering solutions 
              for every occasion, from intimate family gatherings to grand celebrations. Our expert chefs bring years of 
              professional experience to make your special day truly unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="tel:09668756031" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:xzeroncatering@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="/#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info + Social Icons */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-accent" />
                <span className="text-sm text-gray-300">Mon-Sun: 8AM-8PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span className="text-sm text-gray-300">Cavite & Metro Manila</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-accent" />
                <a href="tel:09668756031" className="text-sm text-gray-300 hover:text-white transition-colors">09668756031</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                <a href="mailto:xzeroncatering@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">xzeroncatering@gmail.com</a>
              </div>
            </div>
            
            <h4 className="font-semibold mb-4 text-gold-light mt-6">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Jx6Xcku8t/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold-primary/20 rounded-full flex items-center justify-center hover:bg-gold-primary/30 transition-colors">
                <Facebook className="w-5 h-5 text-gold-accent" />
              </a>
              <a href="https://www.instagram.com/xzeroncatering/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold-primary/20 rounded-full flex items-center justify-center hover:bg-gold-primary/30 transition-colors">
                <Instagram className="w-5 h-5 text-gold-accent" />
              </a>
            </div>
          </div>
        </div>

        
        
        {/* Bottom Footer */}
        <div className="border-t border-gold-primary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © {currentYear} Xzeron Catering Services. All rights reserved. | Creating unforgettable culinary experiences in Cavite and beyond.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Licensed & Professional</span>
              <span className="text-sm text-gray-300">|</span>
              <span className="text-sm text-gray-300">5+ Years Experience</span>
              <span className="text-sm text-gray-300">|</span>
              <span className="text-sm text-gray-300">100+ Events Catered</span>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-4 border-t border-gold-primary/20">
          <p className="text-gray-400 text-sm">
            Made with <Heart className="w-4 h-4 text-gold-accent inline" /> for creating unforgettable celebrations
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
