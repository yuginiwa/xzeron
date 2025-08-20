import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Award, Users, Building, ArrowRight, Calendar, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className="bg-gold-light text-gold-dark border-gold-primary">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Professional & Licensed
                </Badge>
                <Badge className="bg-brown-primary/10 text-brown-primary border-brown-primary/20">
                  <Award className="w-3 h-3 mr-1" />
                  Expert Chefs
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brown-primary leading-tight">
                Delicious Moments
                <span className="text-gold-primary block">Begin Here</span>
                🍽️✨
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete catering solutions for every celebration – from intimate gatherings to grand celebrations. 
                Our expert chefs, trained in prestigious establishments like Republic Cavite Restaurant and Town's Delight, 
                bring years of professional experience to your special day.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Get Your Free Quote Today
              </Button>
              <Button size="lg" variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white text-lg px-8 py-4">
                View Our Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-primary">100+</div>
                <div className="text-sm text-gray-600">Events Catered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-primary">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-primary">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gold-light to-cream p-8 rounded-2xl shadow-xl border border-gold-light">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-3xl">🍽️</span>
                  </div>
                  <h3 className="text-xl font-bold text-brown-primary">Xzeron Catering</h3>
                  <p className="text-gray-600">"Delicious moments begins here"</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Rated 5.0 by our clients</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gold-light">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Professional Service</div>
                    <div className="text-xs text-gray-600">Licensed & Insured</div>
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
