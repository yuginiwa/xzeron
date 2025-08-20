import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, Users, DollarSign, Star, ChefHat } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Dishes', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'soup', name: 'Soup', icon: '🍲' },
    { id: 'salad', name: 'Salad', icon: '🥬' },
    { id: 'main-course', name: 'Main Course', icon: '🍖' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' }
  ]

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: "Crispy Lumpia",
      category: "appetizers",
      description: "Fresh spring rolls with ground pork and vegetables, served with sweet chili sauce",
      price: "₱150",
      preparationTime: "15 mins",
      servingSize: "6 pieces",
      image: "🍱",
      featured: true
    },
    {
      id: 2,
      name: "Chicken Empanada",
      category: "appetizers",
      description: "Flaky pastry filled with seasoned chicken, potatoes, and vegetables",
      price: "₱180",
      preparationTime: "20 mins",
      servingSize: "4 pieces",
      image: "🥟"
    },
    {
      id: 3,
      name: "Cheese Sticks",
      category: "appetizers",
      description: "Crispy breaded cheese sticks served with marinara sauce",
      price: "₱120",
      preparationTime: "12 mins",
      servingSize: "8 pieces",
      image: "🧀"
    },
    // Soup
    {
      id: 4,
      name: "Sinigang na Baboy",
      category: "soup",
      description: "Traditional sour soup with pork, vegetables, and tamarind broth",
      price: "₱350",
      preparationTime: "45 mins",
      servingSize: "Good for 6-8",
      image: "🍲",
      featured: true
    },
    {
      id: 5,
      name: "Chicken Sopas",
      category: "soup",
      description: "Creamy chicken noodle soup with vegetables and egg",
      price: "₱280",
      preparationTime: "30 mins",
      servingSize: "Good for 6-8",
      image: "🥣"
    },
    // Salad
    {
      id: 6,
      name: "Fresh Garden Salad",
      category: "salad",
      description: "Mixed greens with tomatoes, cucumbers, and house dressing",
      price: "₱200",
      preparationTime: "10 mins",
      servingSize: "Good for 4-6",
      image: "🥗"
    },
    {
      id: 7,
      name: "Chicken Caesar Salad",
      category: "salad",
      description: "Romaine lettuce with grilled chicken, parmesan, and caesar dressing",
      price: "₱280",
      preparationTime: "20 mins",
      servingSize: "Good for 4-6",
      image: "🥬"
    },
    // Main Course
    {
      id: 8,
      name: "Lechon Kawali",
      category: "main-course",
      description: "Crispy fried pork belly served with lechon sauce and rice",
      price: "₱450",
      preparationTime: "60 mins",
      servingSize: "Good for 6-8",
      image: "🍖",
      featured: true
    },
    {
      id: 9,
      name: "Chicken Adobo",
      category: "main-course",
      description: "Classic Filipino adobo with soy sauce, vinegar, and garlic",
      price: "₱380",
      preparationTime: "45 mins",
      servingSize: "Good for 6-8",
      image: "🍗"
    },
    {
      id: 10,
      name: "Beef Kaldereta",
      category: "main-course",
      description: "Tender beef stew with potatoes, carrots, and liver sauce",
      price: "₱420",
      preparationTime: "90 mins",
      servingSize: "Good for 6-8",
      image: "🥘"
    },
    {
      id: 11,
      name: "Fish Fillet",
      category: "main-course",
      description: "Pan-fried fish fillet with lemon butter sauce and vegetables",
      price: "₱350",
      preparationTime: "25 mins",
      servingSize: "Good for 4-6",
      image: "🐟"
    },
    // Dessert
    {
      id: 12,
      name: "Leche Flan",
      category: "dessert",
      description: "Smooth caramel custard with rich caramel sauce",
      price: "₱150",
      preparationTime: "30 mins",
      servingSize: "Good for 4-6",
      image: "🍮",
      featured: true
    },
    {
      id: 13,
      name: "Biko",
      category: "dessert",
      description: "Traditional sticky rice cake with coconut and brown sugar",
      price: "₱120",
      preparationTime: "45 mins",
      servingSize: "Good for 6-8",
      image: "🍚"
    },
    {
      id: 14,
      name: "Fresh Fruit Salad",
      category: "dessert",
      description: "Assorted fresh fruits with cream and honey",
      price: "₱180",
      preparationTime: "15 mins",
      servingSize: "Good for 6-8",
      image: "🍎"
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Exceptional Cuisine, Crafted with Care</h2>
          <p className="text-lg text-gray-600 mb-6">
            Every dish tells a story of quality, tradition, and innovation
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our menus showcase the perfect balance of traditional Filipino favorites and international cuisine, 
            all prepared with the finest ingredients and our signature secret recipes. Each dish is crafted to 
            create memorable dining experiences that complement your special celebration.
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

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className={`hover:shadow-lg transition-all duration-300 border ${
                item.featured ? 'ring-2 ring-gold-primary/30 bg-gold-light/5' : ''
              } hover:border-gold-primary`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-lg text-brown-primary">{item.name}</CardTitle>
                      {item.featured && (
                        <Badge className="bg-gold-primary text-white text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600 text-sm">
                      {item.description}
                    </CardDescription>
                  </div>
                  <div className="text-2xl ml-2">{item.image}</div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-primary">{item.price}</span>
                    <Badge variant="outline" className="border-gold-primary text-gold-primary">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gold-primary" />
                      <span>{item.preparationTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold-primary" />
                      <span>{item.servingSize}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Menu Note */}
        <div className="bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="w-8 h-8 text-gold-primary mr-3" />
            <h3 className="text-xl font-bold text-brown-primary">Custom Menu Options</h3>
          </div>
          <p className="text-gray-600 mb-6">
            All our menus can be customized to accommodate dietary restrictions, personal preferences, and cultural requirements. 
            Speak with our team about creating the perfect menu for your celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              Request Custom Menu
            </button>
            <button className="border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Download Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
