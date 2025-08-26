import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, FileText } from 'lucide-react'

const Contact = () => {
  

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "09668756031",
      subtitle: "Available Mon-Sun 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "xzeroncatering@gmail.com",
      subtitle: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Business Address",
      value: "BLK22 lot 1 Verdant Residences",
      subtitle: "BRGY. Sabang NAIC Cavite"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Sunday: 8:00 AM - 8:00 PM",
      subtitle: "Available for consultations and event planning"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Let's Plan Your Perfect Celebration</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create delicious moments? We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-brown-primary mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-primary">{info.title}</div>
                    <div className="text-gray-700">{info.value}</div>
                    <div className="text-sm text-gray-500">{info.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gold-light/20 to-cream border border-gold-light/30 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-brown-primary mb-6">Send Us a Message</h3>
            <p className="text-gray-600 mb-6">
              Have questions or ready to book? Reach out to us on Facebook for a quick response.
            </p>
            
            <a href="https://web.facebook.com/profile.php?id=61579473876201" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 py-3 text-lg text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Us a Message on Facebook
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {/* Map Embed */}
          <div>
            <h4 className="text-xl font-bold text-brown-primary mb-4">Our Location</h4>
            <div className="w-full h-64 bg-gradient-to-br from-gold-light to-cream rounded-xl flex items-center justify-center border border-gold-light">
              <div className="text-center text-gold-primary/60">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Map Embed</p>
                <p className="text-sm">(Replace with actual Google Maps embed)</p>
                <p className="text-xs mt-2">BLK22 lot 1 Verdant Residences<br />BRGY. Sabang NAIC Cavite</p>
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-xl p-6">
            <h4 className="font-semibold text-brown-primary mb-4">Why Work With Xzeron?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Free consultation and menu planning</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Customized packages for every budget</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Professional service from start to finish</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete event coordination and cleanup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
