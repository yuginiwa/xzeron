import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { UtensilsCrossed, Star, Clock, Users } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuCategories = [
    { id: 'all', name: 'All Dishes', icon: UtensilsCrossed },
    { id: 'appetizer', name: 'Appetizers', icon: UtensilsCrossed },
    { id: 'soup', name: 'Soup', icon: UtensilsCrossed },
    { id: 'salad', name: 'Salad', icon: UtensilsCrossed },
    { id: 'main-course', name: 'Main Course', icon: UtensilsCrossed },
    { id: 'dessert', name: 'Dessert', icon: UtensilsCrossed }
  ]

  const menuItems = [
    {
      name: "Crispy Pata",
      category: "appetizer",
      description: "Crispy deep-fried pork knuckle served with soy-vinegar dip",
      price: "₱1,200",
      preparation: "20-25 min",
      serves: "4-6 people",
      rating: 5,
      popular: true
    },
    {
      name: "Sinigang na Baboy",
      category: "soup",
      description: "Sour tamarind soup with pork, vegetables, and tamarind broth",
      price: "₱800",
      preparation: "45-60 min",
      serves: "6-8 people",
      rating: 5,
      popular: false
    },
    {
      name: "Fresh Garden Salad",
      category: "salad",
      description: "Mixed greens with tomatoes, cucumber, and house dressing",
      price: "₱350",
      preparation: "15 min",
      serves: "4-6 people",
      rating: 4,
      popular: false
    },
    {
      name: "Lechon Kawali",
      category: "main-course",
      description: "Crispy pork belly with lechon sauce and steamed rice",
      price: "₱1,500",
      preparation: "60-90 min",
      serves: "8-10 people",
      rating: 5,
      popular: true
    },
    {
      name: "Chicken Adobo",
      category: "main-course",
      description: "Classic Filipino adobo with soy sauce, vinegar, and garlic",
      price: "₱650",
      preparation: "45-60 min",
      serves: "6-8 people",
      rating: 5,
      popular: false
    },
    {
      name: "Halo-Halo",
      category: "dessert",
      description: "Mixed dessert with shaved ice, sweet beans, and ice cream",
      price: "₱180",
      preparation: "10 min",
      serves: "1 person",
      rating: 5,
      popular: true
    },
    {
      name: "Lumpia Shanghai",
      category: "appetizer",
      description: "Crispy spring rolls with ground pork and vegetables",
      price: "₱450",
      preparation: "30-40 min",
      serves: "6-8 people",
      rating: 4,
      popular: false
    },
    {
      name: "Bulalo",
      category: "soup",
      description: "Beef marrow soup with corn and vegetables",
      price: "₱1,800",
      preparation: "3-4 hours",
      serves: "8-10 people",
      rating: 5,
      popular: true
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600">Discover our delicious dishes crafted with passion and quality ingredients</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border hover:border-orange-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-gray-900">{item.name}</CardTitle>
                  {item.popular && (
                    <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                  )}
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-orange-600">{item.price}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.preparation}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{item.serves}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Menu Note */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customize Your Menu</h3>
            <p className="text-gray-600 mb-6">
              All our dishes can be customized to your preferences. We also offer special dietary 
              requirements including vegetarian, vegan, and halal options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Request Custom Menu
              </button>
              <button className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Download Full Menu
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Prices are subject to change. Contact us for current pricing and package deals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Menu
