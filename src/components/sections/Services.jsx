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
      color: "text-gold-primary",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/traditional+american+wedding-1920w.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS90cmFkaXRpb25hbCthbWVyaWNhbit3ZWRkaW5nLTE5MjB3LndlYnAiLCJpYXQiOjE3NTYyMDA0NjgsImV4cCI6MzE1NTMyNDY2NDQ2OH0.uNo1Qs4dzUVqz73tQYJRtvV17Kraz-UOmSuaPmkMehg"
    },
    {
      icon: Crown,
      title: "Debuts",
      description: "Celebrate this milestone with sophisticated menus and stunning presentations that match the elegance of your debut",
      color: "text-gold-primary",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/pexels-pexels-32333361.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9wZXhlbHMtcGV4ZWxzLTMyMzMzMzYxLmpwZyIsImlhdCI6MTc1NjIwMDQ5MiwiZXhwIjozMTUzNzcyNDY2NDQ5Mn0.zfo2TjRiQZHh1ILJ7oL4k5VYJuot-KbqQXgVMmarzHw"
    },
    {
      icon: Cake,
      title: "Kiddie Parties",
      description: "Fun, colorful, and delicious – our kiddie packages bring joy to young hearts and peace of mind to parents",
      color: "text-gold-primary",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/pexels-ivan-samkov-8104207.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9wZXhlbHMtaXZhbi1zYW1rb3YtODEwNDIwNy5qcGciLCJpYXQiOjE3NTYyMDA1MDcsImV4cCI6ODY1NzU2MTE0MTA3fQ.ngr4D3BbNgoqsJBHKA2hqiLFBJhqqO7HF-8xSTXceyo"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Complete catering solutions for every celebration – from intimate gatherings to grand celebrations
          </p>
        </div>

        {/* Three-Column Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border hover:border-gold-primary group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl text-brown-primary mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-800 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="border-gold-primary text-brown-primary hover:bg-gold-primary hover:text-white transition-colors"
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
            className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-brown-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
