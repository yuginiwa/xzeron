import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, MessageCircle, Calendar, Users } from 'lucide-react'

const Contact = () => {
  const [activeForm, setActiveForm] = useState('inquiry')

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Ready to plan your perfect event? Let's start the conversation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">+63 966 875 6031</div>
                    <div className="text-sm text-gray-500">Mon-Sat 8AM-8PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">xzeroncatering@gmail.com</div>
                    <div className="text-sm text-gray-500">Response within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-600">BLK22 lot 1 Verdant Residences</div>
                    <div className="text-gray-600">BRGY. Sabang NAIC Cavite</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</div>
                    <div className="text-sm text-gray-500">Sunday: By appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-4">Why Choose Xzeron?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Free consultation and menu customization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Professional event setup and decoration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible payment terms available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>End-to-end event coordination</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.facebook.com/share/1Jx6Xcku8t/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <span>Facebook Page</span>
                </a>
                <p className="text-sm text-gray-500">
                  Stay updated with our latest events, menu updates, and special offers
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 border shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="flex space-x-2 mb-6">
                <Button 
                  variant={activeForm === 'inquiry' ? 'default' : 'outline'}
                  onClick={() => setActiveForm('inquiry')}
                  className="flex-1"
                >
                  Event Inquiry
                </Button>
                <Button 
                  variant={activeForm === 'quote' ? 'default' : 'outline'}
                  onClick={() => setActiveForm('quote')}
                  className="flex-1"
                >
                  Get Quote
                </Button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      id="firstName"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      id="lastName"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input 
                    id="phone"
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="+63 966 875 6031"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select 
                      id="eventType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="debut">Debut</option>
                      <option value="kiddie-party">Kiddie Party</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="house-blessing">House Blessing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input 
                      id="guests"
                      type="number" 
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input 
                    id="eventDate"
                    type="date" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder={activeForm === 'inquiry' ? "Tell us about your event and catering needs..." : "Describe your event and we'll provide a customized quote..."}
                  ></textarea>
                </div>
                <div className="text-sm text-gray-600">
                  <p>By submitting this form, you agree to our <a href="#privacy" className="text-orange-600 hover:underline">Privacy Policy</a> and <a href="#terms" className="text-orange-600 hover:underline">Terms of Service</a>.</p>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mt-20 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accepted Payment Methods</h3>
            <p className="text-gray-600 mb-6">
              We offer flexible payment options to make your event planning easier
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "GCash", icon: "💳" },
                { name: "PayPal", icon: "💳" },
                { name: "Bank Transfer", icon: "🏦" },
                { name: "Cash", icon: "💰" }
              ].map((method, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <div className="font-medium text-gray-900">{method.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
