import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Heart, Crown, Cake, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Make your dream wedding unforgettable with our complete wedding packages, elegant setups, and exquisite cuisine",
      color: "text-gold-primary"
    },
    {
      icon: Crown,
      title: "Debuts",
      description: "Celebrate this milestone with sophisticated menus and stunning presentations that match the elegance of your debut",
      color: "text-gold-primary"
    },
    {
      icon: Cake,
      title: "Kiddie Parties",
      description: "Fun, colorful, and delicious – our kiddie packages bring joy to young hearts and peace of mind to parents",
      color: "text-gold-primary"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete catering solutions for every celebration – from intimate gatherings to grand celebrations
          </p>
        </div>

        {/* Three-Column Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border hover:border-gold-primary group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl text-brown-primary mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Packages Link */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Packages
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
