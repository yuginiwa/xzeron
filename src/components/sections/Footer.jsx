import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageSquare, Heart, ChefHat } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gold-dark to-brown-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-gold-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Xzeron Catering Services</h3>
                <p className="text-gray-200">Delicious moments begins here</p>
                <p className="text-sm text-gold-light">Complete & Customized Catering Solutions</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Creating delicious moments, one celebration at a time. We provide complete and customized catering solutions 
              for every occasion, from intimate family gatherings to grand celebrations. Our expert chefs bring years of 
              professional experience to make your special day truly unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#book" className="text-gray-300 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>
          
          {/* Business Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-light">Business Information</h4>
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
                <span className="text-sm text-gray-300">09668756031</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                <span className="text-sm text-gray-300">xzeroncatering@gmail.com</span>
              </div>
            </div>
            
            <h4 className="font-semibold mb-4 text-gold-light mt-6">Service Areas</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <div>• Cavite (NAIC, Imus, Bacoor)</div>
              <div>• Metro Manila</div>
              <div>• Laguna</div>
              <div>• Batangas</div>
              <div>• And surrounding areas</div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gold-primary/30 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-gold-light">Connect With Us</h4>
              <p className="text-gray-300 text-sm mb-4">
                Follow us for daily updates, menu features, and behind-the-scenes content
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gold-primary/20 rounded-full flex items-center justify-center hover:bg-gold-primary/30 transition-colors">
                  <Facebook className="w-5 h-5 text-gold-accent" />
                </a>
                <a href="#" className="w-10 h-10 bg-gold-primary/20 rounded-full flex items-center justify-center hover:bg-gold-primary/30 transition-colors">
                  <Instagram className="w-5 h-5 text-gold-accent" />
                </a>
                <a href="#" className="w-10 h-10 bg-gold-primary/20 rounded-full flex items-center justify-center hover:bg-gold-primary/30 transition-colors">
                  <MessageSquare className="w-5 h-5 text-gold-accent" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-gold-light">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for special offers and event planning tips
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-gold-primary/30 text-white placeholder-gray-300 focus:outline-none focus:border-gold-accent"
                />
                <button className="px-4 py-2 bg-gold-accent text-gold-dark rounded-lg font-semibold hover:bg-gold-primary transition-colors">
                  Subscribe
                </button>
              </div>
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
