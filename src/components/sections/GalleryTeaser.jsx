import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Camera } from 'lucide-react'

const GalleryTeaser = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Elegant Wedding Setup",
      category: "Event Setups",
      image: "https://images.pexels.com/photos/1691932/pexels-photo-1691932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: true
    },
    {
      id: 2,
      title: "Gourmet Food Presentation",
      category: "Food Presentations",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: false
    },
    {
      id: 3,
      title: "Debut Celebration",
      category: "Event Setups",
      image: "https://images.pexels.com/photos/1691932/pexels-photo-1691932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: false
    },
    {
      id: 4,
      title: "Behind the Scenes",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: false
    },
    {
      id: 5,
      title: "Kiddie Party Setup",
      category: "Event Setups",
      image: "https://images.pexels.com/photos/1691932/pexels-photo-1691932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: false
    },
    {
      id: 6,
      title: "Corporate Event",
      category: "Event Setups",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: false
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Gallery Teaser</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our creations in action – from elegant setups to exquisite presentations
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative group cursor-pointer transition-all duration-300 ${
                index === 0 ? 'row-span-2 col-span-2 md:col-span-1' : ''
              } ${index === 3 ? 'row-span-2' : ''}`}
            >
              <div className={`w-full rounded-xl shadow-lg overflow-hidden ${
                index === 0 ? 'h-80' : index === 3 ? 'h-80' : 'h-40'
              }`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs opacity-80">{item.category}</p>
                  </div>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-2 right-2 bg-gold-primary text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery CTA */}
        <div className="text-center">
          <a href="#gallery">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Gallery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GalleryTeaser
