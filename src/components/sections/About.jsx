import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ChefHat, Star } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Chef Portrait */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-gray-200 p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Professional Chef"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brown-primary">Our Expert Chef</h3>
                  <p className="text-gray-800">Years of experience from prestigious establishments</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">Republic Cavite Restaurant • Town's Delight</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-brown-primary">Professional Chef</div>
                    <div className="text-xs text-gray-800">Licensed & Experienced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Brief Story */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-brown-primary leading-tight">
              Where Passion Meets Expertise
            </h2>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              Xzeron Catering Services was born from a simple belief: every celebration deserves exceptional food and unforgettable experiences. 
              We provide complete and customized catering solutions for every occasion, from intimate family gatherings to grand celebrations.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              What sets us apart is our commitment to quality and our unique approach to flavor. Our food has been tried and tested, 
              guaranteed to deliver unique tastes made even more special with our own secret recipes. This isn't just catering – it's culinary artistry.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              Our journey is rooted in expertise. Our head chef brings extensive experience from working with well-known establishments 
              such as Republic Cavite Restaurant, Town's Delight, and several other reputable restaurants throughout Cavite.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-brown-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
