import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Building, TrendingUp, Award, CheckCircle, ChefHat, Heart, Users, Star } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Our Story: Where Passion Meets Expertise</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Xzeron Catering Services was born from a simple belief: every celebration deserves exceptional food and unforgettable experiences. 
            We provide complete and customized catering solutions for every occasion, from intimate family gatherings to grand celebrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brown-primary">Crafting Unforgettable Culinary Experiences</h3>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to quality and our unique approach to flavor. Our food has been tried and tested, 
              guaranteed to deliver unique tastes made even more special with our own secret recipes. This isn't just catering – it's culinary artistry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey is rooted in expertise. Our head chef brings extensive experience from working with well-known establishments 
              such as Republic Cavite Restaurant, Town's Delight, and several other reputable restaurants throughout Cavite. 
              This background brings not only technical expertise in food preparation but also the creativity and dedication 
              needed to make every dish memorable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the initial consultation to the final cleanup, we handle every detail with precision and care. 
              Our goal is simple: to make your celebration stress-free while creating delicious moments that you and 
              your guests will remember long after the last bite.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gold-light to-cream p-8 rounded-2xl shadow-lg border border-gold-light">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center mx-auto">
                  <ChefHat className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brown-primary">Our Mission</h4>
                <p className="text-gray-600">
                  To transform every celebration into an unforgettable experience through exceptional cuisine, 
                  elegant presentations, and stress-free service that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Why Choose Xzeron Catering?</h3>
          <p className="text-lg text-gray-600">Professional expertise meets culinary excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border hover:border-gold-primary transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-gold-primary" />
              </div>
              <CardTitle>Proven Expertise</CardTitle>
              <CardDescription>
                Professional chefs with experience from Cavite's most respected restaurants including Republic Cavite Restaurant and Town's Delight.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-gold-primary transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-gold-primary" />
              </div>
              <CardTitle>Secret Recipes</CardTitle>
              <CardDescription>
                Unique flavors and tried-and-tested dishes that set us apart. Our secret recipes make every meal memorable.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-gold-primary transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gold-primary" />
              </div>
              <CardTitle>Complete Packages</CardTitle>
              <CardDescription>
                Everything you need for your celebration, handled by one trusted team. From setup to cleanup, we manage it all.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border hover:border-gold-primary transition-colors shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gold-primary" />
              </div>
              <CardTitle>Stress-Free Service</CardTitle>
              <CardDescription>
                From planning to cleanup, we manage every detail so you can enjoy your event and create lasting memories.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brown-primary mb-4">Ready to Create Your Perfect Celebration?</h3>
            <p className="text-gray-600 mb-6">
              Let us handle the details while you focus on what matters most – celebrating with your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
                Get Your Free Quote
              </button>
              <button className="border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                View Our Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
