import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Crown, Cake, Building, Users, Calendar, ArrowRight, CheckCircle, Star, Phone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Wedding Catering",
      description: "Make your dream wedding unforgettable with our complete wedding packages, elegant setups, and exquisite cuisine",
      icon: Heart,
      features: ["Custom menu planning", "Professional service staff", "Elegant table setups", "Complete coordination"]
    },
    {
      title: "Debut Celebrations",
      description: "Celebrate this milestone with sophisticated menus and stunning presentations that match the elegance of your debut",
      icon: Crown,
      features: ["Sophisticated cuisine", "Elegant presentations", "Cocktail receptions", "Formal sit-down dinners"]
    },
    {
      title: "Kiddie Parties",
      description: "Fun, colorful, and delicious – our kiddie packages bring joy to young hearts and peace of mind to parents",
      icon: Cake,
      features: ["Kid-friendly menus", "Colorful presentations", "Fun serving styles", "Parent-approved quality"]
    },
    {
      title: "Corporate Events",
      description: "Professional catering services that impress clients and colleagues while keeping your event running smoothly",
      icon: Building,
      features: ["Professional service", "Business-appropriate menus", "Efficient setup", "Client satisfaction"]
    }
  ]

  const eventTypes = [
    "Weddings",
    "Debuts", 
    "Kiddie Parties",
    "Birthdays",
    "House Blessings",
    "Company Events",
    "School Functions"
  ]

  const addOns = [
    "Table & Chair Rentals",
    "Decorations & Centerpieces",
    "Sound System & Music",
    "Photography Services",
    "Transportation",
    "Custom Menu Design"
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Complete Catering Solutions for Every Celebration</h2>
          <p className="text-lg text-gray-600">From weddings to corporate events, we handle every detail</p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border hover:border-gold-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-gold-primary" />
                </div>
                <CardTitle className="text-lg text-brown-primary">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Complete Packages Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brown-primary mb-4">Complete Catering Packages</h3>
            <p className="text-lg text-gray-600">Everything you need for your special celebration</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Wedding Package */}
            <Card className="border-2 border-gold-primary/20 hover:border-gold-primary transition-colors shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-brown-primary">Complete Wedding Package</CardTitle>
                <CardDescription className="text-gray-600">Your Dream Wedding, Perfectly Catered</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Your wedding day should be magical, not stressful. Our complete wedding packages include everything you need 
                  for an unforgettable celebration – exquisite cuisine, elegant table settings, professional service staff, and seamless coordination.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Custom menu planning and tasting session</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Professional service staff in formal attire</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Elegant table setups with linens and centerpieces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Complete kitchen equipment and serving stations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Coordination with your other wedding vendors</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                  Get Wedding Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Debut Package */}
            <Card className="border-2 border-gold-primary/20 hover:border-gold-primary transition-colors shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-brown-primary">Complete Debut Package</CardTitle>
                <CardDescription className="text-gray-600">Celebrate Your 18th in Style</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Your debut marks the beginning of adulthood – make it extraordinary. Our complete debut packages combine 
                  sophisticated cuisine with elegant presentations that match the significance of this milestone.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Sophisticated menu planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Elegant table arrangements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Professional service staff</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Complete event coordination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Custom decoration options</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                  Get Debut Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Kiddie Package */}
            <Card className="border-2 border-gold-primary/20 hover:border-gold-primary transition-colors shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-brown-primary">Complete Kiddie Package</CardTitle>
                <CardDescription className="text-gray-600">Fun, Colorful & Delicious Celebrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Children's parties should be magical experiences filled with joy, laughter, and delicious food. 
                  Our kiddie packages are specially designed with young guests in mind.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Kid-friendly menu options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Colorful food presentations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Fun serving styles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Parent-approved quality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gold-primary" />
                    <span>Complete party coordination</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                  Get Kiddie Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Types & Add-ons */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Event Types */}
          <div>
            <h3 className="text-2xl font-bold text-brown-primary mb-6">Event Types We Cater</h3>
            <div className="space-y-3">
              {eventTypes.map((eventType, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                  <span className="text-gray-700">{eventType}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              From intimate family gatherings to grand celebrations, we have the expertise and experience 
              to make your event truly special.
            </p>
          </div>

          {/* Add-ons */}
          <div>
            <h3 className="text-2xl font-bold text-brown-primary mb-6">Additional Services</h3>
            <div className="space-y-3">
              {addOns.map((addOn, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                  <span className="text-gray-700">{addOn}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              Customize your package with additional services to create the perfect celebration experience.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Ready to Plan Your Perfect Event?</h3>
          <p className="text-gray-600 mb-6">
            Let us help you create an unforgettable celebration with our complete catering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
              <Calendar className="w-5 h-5 mr-2" />
              Get Your Free Quote Today
            </Button>
            <Button size="lg" variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: 09668756031
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
