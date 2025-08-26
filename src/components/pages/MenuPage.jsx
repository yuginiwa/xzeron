import { NavHashLink } from 'react-router-hash-link'
import { useIsMobile } from '@/hooks/use-mobile.js'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx"
import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star } from 'lucide-react'
import { menuData } from '@/lib/menuData.js'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx"

const MenuPage = () => {
  const menuCategories = menuData.reduce((acc, dish) => {
    const category = acc.find(c => c.value === dish.value);
    if (category) {
      category.dishes.push(dish);
    } else {
      acc.push({
        category: dish.category,
        value: dish.value,
        dishes: [dish]
      });
    }
    return acc;
  }, []);

  const [selectedTab, setSelectedTab] = React.useState("main-course");
  const isMobile = useIsMobile();

  const handleValueChange = (value) => {
    setSelectedTab(value);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our signature dishes crafted with care and our secret recipes
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={handleValueChange} className="w-full">
          {isMobile ? (
            <Select value={selectedTab} onValueChange={handleValueChange}>
              <SelectTrigger className="w-full mb-12">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {menuCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <TabsList className="grid w-full grid-cols-5 mb-12">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
          )}

          {menuCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.dishes.map((dish) => (
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
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <NavHashLink to="/#contact" smooth>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Order Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </NavHashLink>
        </div>
      </div>
    </section>
  )
}

export default MenuPage
