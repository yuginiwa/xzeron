import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Award, Calendar, ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-100 text-orange-700 border-orange-300">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Professional Service
                </Badge>
                <Badge className="bg-orange-50 text-orange-600 border-orange-200">
                  <Award className="w-3 h-3 mr-1" />
                  Award-Winning
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Delicious Moments
                <span className="text-orange-600 block">Begin Here</span>
                🍽️✨
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Xzeron Catering Services provides complete and customized catering solutions for every occasion. 
                From weddings and debuts to kiddie parties and corporate events, we deliver delicious food, 
                elegant setups, and professional service to make your celebration stress-free and unforgettable.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Event
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-lg px-8 py-4">
                View Our Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Events Catered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl shadow-xl">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                    <img 
                      src="/xzeron-logo.png" 
                      alt="Xzeron Catering Services Logo" 
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Complete Catering Packages</h3>
                  <p className="text-gray-600">Weddings • Debuts • Kiddie Parties • Corporate Events</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-orange-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Professional Chef</div>
                    <div className="text-xs text-gray-600">Republic Cavite Restaurant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
