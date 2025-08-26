import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const BestSellers = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Crispy Lumpia",
      price: "₱150",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/Lumpia.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9MdW1waWEucG5nIiwiaWF0IjoxNzU2MjExODI3LCJleHAiOjMxNzA4NDY3NTgyN30.B7a6EkKUbXcanyNPKORnO6Hqr8-yS4J-e7LZsJFgIvU",
      description: "Fresh spring rolls with ground pork and vegetables",
      featured: true
    },
    {
      id: 2,
      name: "Sinigang na Baboy",
      price: "₱350",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/Sinigang_na_baboy.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9TaW5pZ2FuZ19uYV9iYWJveS5wbmciLCJpYXQiOjE3NTYyMTEzMTAsImV4cCI6MzE3MDg0Njc1MzEwfQ.TPlSHz9fsg3wvLQnLL4NGBIzLV77NsWNumfnKKBwkgc",
      description: "Traditional sour soup with pork and vegetables",
      featured: false
    },
    {
      id: 3,
      name: "Lechon Kawali",
      price: "₱450",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/lechon_kawali1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9sZWNob25fa2F3YWxpMS5wbmciLCJpYXQiOjE3NTYyMTEyODcsImV4cCI6MzE3MDg0Njc1Mjg3fQ.2ac_wRxM1Sipmc_rB9jP6cN0QN4-4hcj-t7_wAk6MBQ",
      description: "Crispy fried pork belly with lechon sauce",
      featured: true
    },
    {
      id: 4,
      name: "Leche Flan",
      price: "₱150",
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/leche_flan.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9sZWNoZV9mbGFuLnBuZyIsImlhdCI6MTc1NjIxMjMwNSwiZXhwIjo4ODE1NjEyNTkwNX0.kpM9Hucm5LlO-E1FmtHd8QDRQxr93F_oqHg8wenMZMI",
      description: "Smooth caramel custard with rich caramel sauce",
      featured: false
    }
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Our Best Sellers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our signature dishes crafted with care and our secret recipes
          </p>
        </div>

        {/* Four-Item Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                dish.featured ? 'ring-2 ring-gold-primary/30' : ''
              }`}
            >
              {/* Dish Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {dish.featured && (
                  <div className="absolute top-2 right-2 bg-gold-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Featured
                  </div>
                )}
              </div>

              {/* Dish Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-brown-primary text-lg">{dish.name}</h3>
                  <span className="text-2xl font-bold text-gold-primary">{dish.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{dish.description}</p>

                <Button
                  variant="outline"
                  className="w-full border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"
                >
                  Add to Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* See Full Menu Button */}
        <div className="text-center">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See Full Menu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BestSellers
