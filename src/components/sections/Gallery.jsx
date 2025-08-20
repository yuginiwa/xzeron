import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Calendar, MapPin } from 'lucide-react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'debut', name: 'Debuts' },
    { id: 'kiddie', name: 'Kiddie Parties' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'birthday', name: 'Birthdays' }
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Elegant Wedding Reception",
      category: "wedding",
      description: "Beautiful outdoor wedding setup with elegant table arrangements",
      guests: "150+",
      location: "Cavite",
      date: "2024",
      image: "/gallery/wedding-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Sweet 16 Debut Celebration",
      category: "debut",
      description: "Colorful debut party with themed decorations and delicious menu",
      guests: "80+",
      location: "Manila",
      date: "2024",
      image: "/gallery/debut-1.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Fun Kiddie Party Setup",
      category: "kiddie",
      description: "Exciting kiddie party with fun decorations and kid-friendly food",
      guests: "30+",
      location: "Cavite",
      date: "2024",
      image: "/gallery/kiddie-1.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Corporate Event Catering",
      category: "corporate",
      description: "Professional corporate event with elegant buffet setup",
      guests: "200+",
      location: "Makati",
      date: "2024",
      image: "/gallery/corporate-1.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Birthday Celebration",
      category: "birthday",
      description: "Special birthday celebration with personalized decorations",
      guests: "50+",
      location: "Cavite",
      date: "2024",
      image: "/gallery/birthday-1.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Intimate Wedding Ceremony",
      category: "wedding",
      description: "Intimate wedding ceremony with romantic atmosphere",
      guests: "60+",
      location: "Tagaytay",
      date: "2024",
      image: "/gallery/wedding-2.jpg",
      featured: false
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          <p className="text-lg text-gray-600">Take a look at our beautiful event setups and catering presentations</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center text-orange-600">
                    <Heart className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">Featured</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{item.guests}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h3>
            <p className="text-gray-600 mb-6">
              Browse our complete portfolio of events and get inspired for your next celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                View Full Portfolio
              </button>
              <button className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Request Similar Setup
              </button>
            </div>
          </div>
        </div>

        {/* Note about photos */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * All photos are from actual events we've catered. Contact us to see more examples 
            of our work or to discuss your specific event requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gallery
