import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      role: "Wedding Client",
      location: "Cavite",
      content: "Xzeron Catering made our wedding day absolutely perfect! The food was exceptional, the service was impeccable, and the setup was elegant. Our guests couldn't stop raving about the delicious cuisine. Thank you for making our special day truly unforgettable!",
      rating: 5,
      portrait: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Roberto Cruz",
      role: "Debut Client",
      location: "Manila",
      content: "Our daughter's debut celebration was a huge success thanks to Xzeron Catering. The sophisticated menu and elegant presentation exceeded our expectations. The team was professional, punctual, and made everything stress-free. Highly recommended!",
      rating: 5,
      portrait: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Ana Martinez",
      role: "Kiddie Party Client",
      location: "Taguig",
      content: "The kiddie party package was perfect! The kids loved the colorful food presentations and fun serving styles. Parents appreciated the quality and variety. Everything was organized beautifully and the cleanup was thorough. Will definitely book again!",
      rating: 5,
      portrait: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Carlos Reyes",
      role: "Corporate Event Client",
      location: "Makati",
      content: "Professional service from start to finish. Our corporate event was catered flawlessly with business-appropriate menus that impressed our clients. The setup was efficient and the food quality was outstanding. Excellent value for money.",
      rating: 5,
      portrait: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – see what our clients say about their Xzeron experience
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white border border-gold-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gold-primary z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gold-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white border border-gold-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gold-primary z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gold-primary" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-gradient-to-br from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              
              {/* Rating Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-accent fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-3xl mx-auto">
                "{currentTestimonial.content}"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              {/* Portrait */}
              <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={currentTestimonial.portrait} 
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Client Details */}
              <div className="text-left">
                <div className="font-semibold text-brown-primary text-lg">{currentTestimonial.name}</div>
                <div className="text-gray-600">{currentTestimonial.role} • {currentTestimonial.location}</div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-primary scale-125' 
                    : 'bg-gold-light hover:bg-gold-primary/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
