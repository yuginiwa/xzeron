import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx"

const MenuPage = () => {
  const menuCategories = [
    {
      category: "Main Course",
      value: "main-course",
      dishes: [
        {
          id: 1,
          name: "Lechon Kawali",
          price: "₱450",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/lechon_kawali1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9sZWNob25fa2F3YWxpMS5wbmciLCJpYXQiOjE3NTYyMTEyODcsImV4cCI6MzE3MDg0Njc1Mjg3fQ.2ac_wRxM1Sipmc_rB9jP6cN0QN4-4hcj-t7_wAk6MBQ",
          description: "Crispy fried pork belly with lechon sauce",
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
          name: "Crispy Pata",
          price: "₱650",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/Crispy_pata.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9DcmlzcHlfcGF0YS5wbmciLCJpYXQiOjE3NTYyMTE1ODAsImV4cCI6MzE1NTMyNDY3NTU4MH0.Jor1Y53Quz6KHn44HnepAYTSp0znTnFKIXK4vfT_Hbw",
          description: "Deep-fried pig trotters served with a soy-vinegar dip.",
          featured: true
        },
        {
          id: 4,
          name: "Kare-Kare",
          price: "₱450",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/Kare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9LYXJlLnBuZyIsImlhdCI6MTc1NjIxMTY2NywiZXhwIjozMTcwODQ2NzU2Njd9.2IIRO47_qjCbAoX_GlsOVFhhcu8ob-HUQTq2MGniSV8",
          description: "A traditional Filipino stew with a rich and thick peanut sauce.",
          featured: false
        },
      ]
    },
    {
      category: "Appetizer",
      value: "appetizer",
      dishes: [
        {
          id: 5,
          name: "Crispy Lumpia",
          price: "₱150",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/Lumpia.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9MdW1waWEucG5nIiwiaWF0IjoxNzU2MjExODI3LCJleHAiOjMxNzA4NDY3NTgyN30.B7a6EkKUbXcanyNPKORnO6Hqr8-yS4J-e7LZsJFgIvU",
          description: "Fresh spring rolls with ground pork and vegetables",
          featured: true
        },
        {
          id: 6,
          name: "Tokwa't Baboy",
          price: "₱200",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/tokwa.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS90b2t3YS5wbmciLCJpYXQiOjE3NTYyMTIwNDcsImV4cCI6MzE3MDg0Njc2MDQ3fQ.CsBWYbtiuoehVhkZXtDA02w34AHPqjR3inQVhrqturY",
          description: "Fried tofu with pork ears in a soy sauce and vinegar dressing.",
          featured: false
        },
      ]
    },
    {
      category: "Soup",
      value: "soup",
      dishes: [
        {
          id: 7,
          name: "Bulalo",
          price: "₱550",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/bulalo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9idWxhbG8ucG5nIiwiaWF0IjoxNzU2MjEyMjMwLCJleHAiOjMxNTUzMjQ2NzYyMzB9.hxvfZ0nOrJ_AMDGgwTG_QABkCDveD3WJaGJxpom8TXo",
          description: "A light-colored soup that is made by cooking beef shanks and bone marrow.",
          featured: false
        },
      ]
    },
    {
      category: "Salad",
      value: "salad",
      dishes: [
        {
          id: 8,
          name: "Ensaladang Mangga",
          price: "₱150",
          image: "https://images.pexels.com/photos/4057733/pexels-photo-4057733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          description: "Green mango salad with tomatoes, onions, and shrimp paste.",
          featured: false
        },
      ]
    },
    {
      category: "Dessert",
      value: "dessert",
      dishes: [
        {
          id: 9,
          name: "Leche Flan",
          price: "₱150",
          image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/leche_flan.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9sZWNoZV9mbGFuLnBuZyIsImlhdCI6MTc1NjIxMjMwNSwiZXhwIjo4ODE1NjEyNTkwNX0.kpM9Hucm5LlO-E1FmtHd8QDRQxr93F_oqHg8wenMZMI",
          description: "Smooth caramel custard with rich caramel sauce",
          featured: false
        },
        {
          id: 10,
          name: "Halo-Halo",
          price: "₱200",
          image: "https://images.pexels.com/photos/5704410/pexels-photo-5704410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          description: "A popular cold dessert which is a concoction of crushed ice, evaporated milk and various ingredients.",
          featured: true
        },
      ]
    }
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our signature dishes crafted with care and our secret recipes
          </p>
        </div>

        <Tabs defaultValue="main-course" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>{category.category}</TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Full Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MenuPage
