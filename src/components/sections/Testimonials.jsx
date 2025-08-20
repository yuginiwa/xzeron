import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card.jsx'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Wedding Client",
      location: "Cavite",
      content: "Xzeron Catering made our wedding day absolutely perfect! The food was delicious, the setup was elegant, and their service was impeccable. Our guests couldn't stop raving about the cuisine. Highly recommended!",
      rating: 5,
      event: "Wedding Reception",
      date: "December 2024"
    },
    {
      name: "Roberto Cruz",
      role: "Corporate Client",
      location: "Makati",
      content: "We hired Xzeron for our company's annual dinner and they exceeded all expectations. The food was amazing, the presentation was professional, and they handled everything smoothly. Our team was very impressed!",
      rating: 5,
      event: "Corporate Dinner",
      date: "November 2024"
    },
    {
      name: "Ana Martinez",
      role: "Debut Client",
      location: "Manila",
      content: "My daughter's debut was a huge success thanks to Xzeron Catering! The food was delicious, the decorations were beautiful, and their staff was so professional. Everything was perfect!",
      rating: 5,
      event: "Sweet 16 Debut",
      date: "October 2024"
    },
    {
      name: "Carlos Reyes",
      role: "Birthday Client",
      location: "Cavite",
      content: "We celebrated my mom's 60th birthday with Xzeron Catering and it was fantastic! The food was amazing, the setup was beautiful, and they made the whole process so easy. Highly recommend!",
      rating: 5,
      event: "60th Birthday",
      date: "September 2024"
    },
    {
      name: "Isabella Torres",
      role: "Kiddie Party Client",
      location: "Taguig",
      content: "Xzeron Catering made my son's 5th birthday party so special! The food was kid-friendly and delicious, the decorations were fun and colorful, and the kids loved everything. Perfect service!",
      rating: 5,
      event: "5th Birthday Party",
      date: "August 2024"
    },
    {
      name: "Miguel Lopez",
      role: "House Blessing Client",
      location: "Cavite",
      content: "For our house blessing, Xzeron Catering provided excellent service and delicious food. The traditional Filipino dishes were perfect for the occasion. Very professional and reliable!",
      rating: 5,
      event: "House Blessing",
      date: "July 2024"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real testimonials from satisfied clients across different events</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-orange-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</div>
                  <div className="text-xs text-gray-500">
                    {testimonial.event} • {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Success Numbers</h3>
            <p className="text-gray-600">Trusted by hundreds of satisfied clients</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Events Catered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Venues Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients!</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the same exceptional service and delicious food that our clients love. 
              Let us make your next event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Your Event
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by clients across:</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <span>• Cavite</span>
            <span>• Manila</span>
            <span>• Makati</span>
            <span>• Taguig</span>
            <span>• Tagaytay</span>
            <span>• And more...</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
