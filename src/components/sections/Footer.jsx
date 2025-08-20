import React from 'react'
import { Phone, Mail, MapPin, UtensilsCrossed } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-700 to-orange-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <img 
                  src="/xzeron-logo.png" 
                  alt="Xzeron Catering Services Logo" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Xzeron Catering Services</h3>
                <p className="text-orange-200">"Delicious moments begins here"</p>
                <p className="text-sm text-orange-100">Professional Catering Solutions</p>
              </div>
            </div>
            <p className="text-orange-200 mb-4">
              Your trusted partner in creating unforgettable events. From weddings and debuts 
              to kiddie parties and corporate events, we deliver delicious food, elegant setups, 
              and professional service to make your celebration stress-free and memorable.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+639668756031" className="text-orange-200 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:xzeroncatering@gmail.com" className="text-orange-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#contact" className="text-orange-200 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-orange-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#menu" className="text-orange-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-orange-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-orange-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-orange-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Weddings</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Debuts</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Kiddie Parties</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Birthdays</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">House Blessings</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © 2024 Xzeron Catering Services. All rights reserved. | Professional Catering Services
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-orange-200">Licensed & Insured</span>
              <span className="text-sm text-orange-200">|</span>
              <span className="text-sm text-orange-200">5+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-orange-600/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-sm text-orange-200">
                Monday - Saturday: 8:00 AM - 8:00 PM<br />
                Sunday: By appointment only
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Service Areas</h5>
              <p className="text-sm text-orange-200">
                Cavite, Manila, Makati, Taguig, Tagaytay<br />
                And surrounding areas
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Payment Methods</h5>
              <p className="text-sm text-orange-200">
                GCash, PayPal, Bank Transfer, Cash<br />
                Flexible payment terms available
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="mt-8 pt-8 border-t border-orange-600/30 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.facebook.com/share/1Jx6Xcku8t/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 p-3 rounded-full transition-colors"
            >
              <span className="text-white font-bold">f</span>
            </a>
            <a 
              href="tel:+639668756031"
              className="bg-orange-600 hover:bg-orange-500 p-3 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
            <a 
              href="mailto:xzeroncatering@gmail.com"
              className="bg-orange-600 hover:bg-orange-500 p-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="text-sm text-orange-200">
            Follow us on social media for updates, special offers, and event inspiration!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
