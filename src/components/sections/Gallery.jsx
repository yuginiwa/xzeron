import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Camera, Heart, Users, Star, Image as ImageIcon } from 'lucide-react'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'food-presentations', name: 'Food Presentations', icon: '🍽️' },
    { id: 'event-setups', name: 'Event Setups', icon: '🎉' },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: '👨‍🍳' },
    { id: 'client-celebrations', name: 'Client Celebrations', icon: '🎊' }
  ]

  const galleryItems = [
    // Food Presentations
    {
      id: 1,
      title: "Elegant Wedding Buffet",
      category: "food-presentations",
      description: "Artfully plated dishes that are as beautiful as they are delicious",
      image: "🍽️",
      featured: true,
      eventType: "Wedding"
    },
    {
      id: 2,
      title: "Debut Reception Setup",
      category: "food-presentations",
      description: "Sophisticated food presentations for milestone celebrations",
      image: "🎂",
      featured: false,
      eventType: "Debut"
    },
    {
      id: 3,
      title: "Kiddie Party Feast",
      category: "food-presentations",
      description: "Colorful and fun food arrangements for children's celebrations",
      image: "🍕",
      featured: false,
      eventType: "Kiddie Party"
    },
    // Event Setups
    {
      id: 4,
      title: "Wedding Reception",
      category: "event-setups",
      description: "Elegant arrangements that set the perfect atmosphere",
      image: "💒",
      featured: true,
      eventType: "Wedding"
    },
    {
      id: 5,
      title: "Corporate Event Setup",
      category: "event-setups",
      description: "Professional catering setups for business events",
      image: "🏢",
      featured: false,
      eventType: "Corporate"
    },
    {
      id: 6,
      title: "Birthday Celebration",
      category: "event-setups",
      description: "Personalized setups for special birthday celebrations",
      image: "🎈",
      featured: false,
      eventType: "Birthday"
    },
    // Behind the Scenes
    {
      id: 7,
      title: "Kitchen Preparation",
      category: "behind-scenes",
      description: "Meet our team and see the care that goes into every dish",
      image: "👨‍🍳",
      featured: false,
      eventType: "Behind the Scenes"
    },
    {
      id: 8,
      title: "Food Styling",
      category: "behind-scenes",
      description: "Our chefs creating beautiful food presentations",
      image: "🎨",
      featured: false,
      eventType: "Behind the Scenes"
    },
    // Client Celebrations
    {
      id: 9,
      title: "Family Gathering",
      category: "client-celebrations",
      description: "Real moments from real celebrations",
      image: "👨‍👩‍👧‍👦",
      featured: true,
      eventType: "Family Event"
    },
    {
      id: 10,
      title: "Anniversary Party",
      category: "client-celebrations",
      description: "Celebrating love and commitment with elegant catering",
      image: "💕",
      featured: false,
      eventType: "Anniversary"
    },
    {
      id: 11,
      title: "Graduation Celebration",
      category: "client-celebrations",
      description: "Academic achievements celebrated with style",
      image: "🎓",
      featured: false,
      eventType: "Graduation"
    },
    {
      id: 12,
      title: "Holiday Feast",
      category: "client-celebrations",
      description: "Festive celebrations with family and friends",
      image: "🎄",
      featured: false,
      eventType: "Holiday"
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Where Culinary Art Meets Celebration</h2>
          <p className="text-lg text-gray-600 mb-6">
            See our creations in action – from elegant setups to exquisite presentations
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every event we cater is unique, just like every celebration should be. Browse through our gallery to see how 
            we transform venues and create memorable dining experiences. From intimate family gatherings to grand celebrations, 
            our attention to detail and commitment to excellence shines through in every photograph.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gold-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold-light hover:text-brown-primary border border-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className={`hover:shadow-lg transition-all duration-300 border ${
                item.featured ? 'ring-2 ring-gold-primary/30 bg-gold-light/5' : ''
              } hover:border-gold-primary group cursor-pointer`}
            >
              <CardHeader className="pb-3">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gold-light to-cream rounded-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {item.image}
                  </div>
                  {item.featured && (
                    <Badge className="absolute top-2 right-2 bg-gold-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-brown-primary">{item.title}</CardTitle>
                    <Badge variant="outline" className="border-gold-primary text-gold-primary text-xs">
                      {item.eventType}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-sm">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ImageIcon className="w-4 h-4 text-gold-primary" />
                    <span>Click to view larger</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Categories Description */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border border-gold-light/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <CardTitle className="text-lg text-brown-primary">Food Presentations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Artfully plated dishes that are as beautiful as they are delicious
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border border-gold-light/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <CardTitle className="text-lg text-brown-primary">Event Setups</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Elegant arrangements that set the perfect atmosphere
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border border-gold-light/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <CardTitle className="text-lg text-brown-primary">Behind the Scenes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Meet our team and see the care that goes into every dish
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border border-gold-light/30">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎊</span>
              </div>
              <CardTitle className="text-lg text-brown-primary">Client Celebrations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Real moments from real celebrations
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Ready to Create Your Own Gallery Moments?</h3>
          <p className="text-gray-600 mb-6">
            Let us help you create beautiful memories and stunning event setups that will be worthy of your own photo gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              <Camera className="w-5 h-5 mr-2 inline" />
              Book Your Event Today
            </button>
            <button className="border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              <Heart className="w-5 h-5 mr-2 inline" />
              View More Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
