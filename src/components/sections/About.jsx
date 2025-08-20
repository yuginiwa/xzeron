import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { UtensilsCrossed, Award, Users, ChefHat } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Xzeron Catering Services?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are unique because our food has been tried and tested, guaranteed to have a unique flavor, 
            made even more special with our own secret recipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border hover:border-orange-500 transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Unique Flavors</CardTitle>
              <CardDescription>
                Our food has been tried and tested, guaranteed to have a unique flavor, 
                made even more special with our own secret recipe.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-orange-500 transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Expert Chef</CardTitle>
              <CardDescription>
                Our chef has worked with well-known establishments such as Republic Cavite Restaurant, 
                Town's Delight, and several other reputable restaurants.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-orange-500 transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Complete Packages</CardTitle>
              <CardDescription>
                We offer complete wedding packages, debut packages, kiddie packages, and 
                customized solutions for every occasion.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-orange-500 transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Professional Service</CardTitle>
              <CardDescription>
                From elegant setups to professional service, we make every celebration 
                stress-free and unforgettable.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Story Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a background in well-known establishments such as Republic Cavite Restaurant, 
                Town's Delight, and several other reputable restaurants, we bring not only expertise 
                in food preparation but also the creativity and dedication needed to make every dish 
                a memorable experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality, unique flavors, and exceptional service has made us a 
                trusted name in catering services across Cavite and beyond.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-xl">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <ChefHat className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Chef's Special</h4>
                <p className="text-gray-700">
                  Every dish is crafted with passion, using our secret recipes and 
                  the finest ingredients to create unforgettable flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
