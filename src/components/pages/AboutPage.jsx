import { NavHashLink } from 'react-router-hash-link'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ChefHat, Star } from 'lucide-react'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Xzeron Catering Services</title>
        <meta name="description" content="Learn about the passion, expertise, and mission of Xzeron Catering Services. Discover our story and commitment to creating unforgettable culinary experiences in Cavite." />
      </Helmet>
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            

            {/* Right: Brief Story */}
            <div className="space-y-6 col-span-2">
              <h2 className="text-4xl font-bold text-brown-primary leading-tight">
                Where Passion Meets Expertise
              </h2>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Xzeron Catering Services was born from a simple belief: every celebration deserves exceptional food and unforgettable experiences. 
                As a provider of professional catering in Cavite, we provide complete and customized catering solutions for every occasion, from intimate family gatherings to grand celebrations.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                What sets us apart is our commitment to quality and our unique approach to flavor. Our food has been tried and tested, 
                guaranteed to deliver unique tastes made even more special with our own secret recipes. This isn't just catering – it's culinary artistry.
              </p>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                Our journey is rooted in expertise. Our head chef brings extensive experience from working with well-known establishments 
                and several other reputable restaurants throughout Cavite.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-brown-primary mb-4">Our Mission</h3>
                  <p className="text-gray-800 leading-relaxed">
                    To provide complete and customized catering solutions with a focus on unique, high-quality, and delicious food, elegant setups, and professional service, ensuring every client's event is a success.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-brown-primary mb-4">Our Vision</h3>
                  <p className="text-gray-800 leading-relaxed">
                    To be the leading catering service in Cavite, known for creating unforgettable and stress-free celebrations through exceptional food and service.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <NavHashLink to="/#contact" smooth>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-brown-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </NavHashLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
