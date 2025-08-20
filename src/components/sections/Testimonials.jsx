import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Heart, Crown, Cake, Users, CheckCircle, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      role: "Wedding Client",
      location: "Cavite",
      content: "Xzeron Catering made our wedding day absolutely perfect! The food was exceptional, the service was impeccable, and the setup was elegant. Our guests couldn't stop raving about the delicious cuisine. Thank you for making our special day truly unforgettable!",
      rating: 5,
      eventType: "Wedding",
      featured: true
    },
    {
      id: 2,
      name: "Roberto Cruz",
      role: "Debut Client",
      location: "Manila",
      content: "Our daughter's debut celebration was a huge success thanks to Xzeron Catering. The sophisticated menu and elegant presentation exceeded our expectations. The team was professional, punctual, and made everything stress-free. Highly recommended!",
      rating: 5,
      eventType: "Debut",
      featured: false
    },
    {
      id: 3,
      name: "Ana Martinez",
      role: "Kiddie Party Client",
      location: "Taguig",
      content: "The kiddie party package was perfect! The kids loved the colorful food presentations and fun serving styles. Parents appreciated the quality and variety. Everything was organized beautifully and the cleanup was thorough. Will definitely book again!",
      rating: 5,
      eventType: "Kiddie Party",
      featured: false
    },
    {
      id: 4,
      name: "Carlos Reyes",
      role: "Corporate Event Client",
      location: "Makati",
      content: "Professional service from start to finish. Our corporate event was catered flawlessly with business-appropriate menus that impressed our clients. The setup was efficient and the food quality was outstanding. Excellent value for money.",
      rating: 5,
      eventType: "Corporate",
      featured: false
    },
    {
      id: 5,
      name: "Isabella Garcia",
      role: "Birthday Client",
      location: "Quezon City",
      content: "My birthday celebration was made extra special by Xzeron Catering. The personalized menu was exactly what I wanted, and the presentation was Instagram-worthy. The team was friendly and made sure everything ran smoothly.",
      rating: 5,
      eventType: "Birthday",
      featured: false
    },
    {
      id: 6,
      name: "Miguel Torres",
      role: "House Blessing Client",
      location: "Cavite",
      content: "Traditional celebration with a modern touch! The house blessing catering was perfect - traditional Filipino favorites prepared with care and presented beautifully. Our family and friends were impressed with both the food and service.",
      rating: 5,
      eventType: "House Blessing",
      featured: false
    }
  ]

  const stats = [
    { number: "100+", label: "Events Catered", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "5+", label: "Years Experience", icon: CheckCircle },
    { number: "4.9", label: "Average Rating", icon: Star }
  ]

  const eventTypes = [
    { type: "Weddings", count: 25, icon: Heart },
    { type: "Debuts", count: 18, icon: Crown },
    { type: "Kiddie Parties", count: 22, icon: Cake },
    { type: "Corporate Events", count: 15, icon: Users }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Hear From Our Happy Clients</h2>
          <p className="text-lg text-gray-600 mb-6">
            Don't just take our word for it – see what our clients say about their Xzeron experience
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The true measure of our success isn't just in the dishes we serve, but in the memories we help create. 
            Our clients trust us with their most important celebrations, and their feedback drives us to continuously exceed expectations. 
            Read their stories and discover why families throughout Cavite choose Xzeron Catering Services for their special moments.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gold-primary" />
              </div>
              <div className="text-3xl font-bold text-gold-primary mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <Quote className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brown-primary mb-2">Client Spotlight</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-light/30">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "Xzeron Catering transformed our wedding reception into a culinary masterpiece. From the initial consultation 
                  to the final cleanup, every detail was handled with precision and care. The food was not only delicious but 
                  beautifully presented, and our guests are still talking about it months later. The team's professionalism 
                  and attention to detail made our special day truly stress-free and memorable."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-brown-primary">Maria & Roberto Santos</div>
                    <div className="text-sm text-gray-600">Wedding Celebration • Cavite • December 2024</div>
                  </div>
                  <Badge className="bg-gold-primary text-white">
                    <Heart className="w-4 h-4 mr-1" />
                    Featured Review
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className={`border shadow-sm hover:shadow-lg transition-shadow ${
                testimonial.featured ? 'ring-2 ring-gold-primary/30 bg-gold-light/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-accent fill-current" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-semibold text-brown-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</div>
                  <Badge variant="outline" className="border-gold-primary text-gold-primary text-xs">
                    {testimonial.eventType}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Type Success */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brown-primary text-center mb-8">Success Across All Event Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="text-center border border-gold-light/30 hover:border-gold-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <event.icon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <CardTitle className="text-lg text-brown-primary">{event.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gold-primary mb-2">{event.count}</div>
                  <CardDescription>Successful Events</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Why Clients Choose Xzeron</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-gold-primary" />
              </div>
              <h4 className="font-semibold text-brown-primary">Quality Guaranteed</h4>
              <p className="text-sm text-gray-600">Every dish is prepared with the finest ingredients and our secret recipes</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-gold-primary" />
              </div>
              <h4 className="font-semibold text-brown-primary">Professional Service</h4>
              <p className="text-sm text-gray-600">Experienced staff ensures your event runs smoothly from start to finish</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-gold-primary" />
              </div>
              <h4 className="font-semibold text-brown-primary">Personal Touch</h4>
              <p className="text-sm text-gray-600">Customized menus and setups tailored to your specific celebration</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-gray-600 mb-6">
            Let us create the same exceptional experience for your special celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              <Heart className="w-5 h-5 mr-2 inline" />
              Book Your Event Today
            </button>
            <button className="border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              <Star className="w-5 h-5 mr-2 inline" />
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
