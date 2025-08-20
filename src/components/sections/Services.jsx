import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Crown, Cake, Building, GraduationCap, Home, Users, Calendar } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Weddings",
      desc: "Complete wedding packages with elegant setups and delicious cuisine",
      icon: Heart,
      featured: true
    },
    {
      title: "Debuts",
      desc: "Special debut packages to make the celebration memorable",
      icon: Crown,
      featured: true
    },
    {
      title: "Kiddie Parties",
      desc: "Fun and colorful kiddie party packages with kid-friendly menus",
      icon: Cake,
      featured: true
    },
    {
      title: "Birthdays",
      desc: "Birthday celebration packages for all ages",
      icon: Cake
    },
    {
      title: "House Blessings",
      desc: "Traditional house blessing catering services",
      icon: Home
    },
    {
      title: "Company Events",
      desc: "Corporate catering for meetings, conferences, and events",
      icon: Building
    },
    {
      title: "School Functions",
      desc: "Educational institution catering services",
      icon: GraduationCap
    },
    {
      title: "Private Dining",
      desc: "Intimate private dining experiences",
      icon: Users
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Catering Services</h2>
          <p className="text-lg text-gray-600">Professional services tailored to your event needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-lg transition-all duration-300 border ${
                service.featured ? 'ring-2 ring-orange-200 bg-orange-50' : ''
              } hover:border-orange-500`}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  service.featured ? 'bg-orange-500' : 'bg-orange-100'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.featured ? 'text-white' : 'text-orange-600'
                  }`} />
                </div>
                <CardTitle className={`text-lg ${service.featured ? 'text-orange-700' : ''}`}>
                  {service.title}
                  {service.featured && (
                    <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Services & Add-ons</h3>
            <p className="text-gray-600">Enhance your event with our premium add-ons</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Event Styling", desc: "Professional event decoration and setup" },
              { title: "Equipment Rental", desc: "Tables, chairs, linens, and serving equipment" },
              { title: "Professional Staff", desc: "Trained servers and event coordinators" },
              { title: "Bar Service", desc: "Beverage service and bartending" },
              { title: "Tableware", desc: "Premium plates, glasses, and cutlery" },
              { title: "Transportation", desc: "Food delivery and setup at your venue" }
            ].map((addon, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Event?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a customized quote for your special occasion. Our team will work with you 
              to create the perfect catering experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                View Sample Menus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
