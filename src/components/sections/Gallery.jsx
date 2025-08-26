import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Heart, Crown, Cake, CheckCircle } from 'lucide-react'

const Gallery = () => {
  const packages = [
    {
      id: 1,
      title: "Complete Wedding Package",
      subtitle: "Your Dream Wedding, Perfectly Catered",
      description: "Your wedding day should be magical, not stressful. Our complete wedding packages include everything you need for an unforgettable celebration – exquisite cuisine, elegant table settings, professional service staff, and seamless coordination.",
      features: [
        "Custom menu planning and tasting session",
        "Professional service staff in formal attire",
        "Elegant table setups with linens and centerpieces",
        "Complete kitchen equipment and serving stations",
        "Coordination with your other wedding vendors"
      ],
      icon: Heart,
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/pexels-asadphoto-169190.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9wZXhlbHMtYXNhZHBob3RvLTE2OTE5MC5qcGciLCJpYXQiOjE3NTYyMDM2NDksImV4cCI6MzE1NTMyNDY2NzY0OX0.lsXDtxGHNf09wtX5k-1dq9e-qjZXKF0iHjLw8Hdsll8",
      cta: "Get Wedding Quote",
      imageFirst: false
    },
    {
      id: 2,
      title: "Complete Debut Package",
      subtitle: "Celebrate Your 18th in Style",
      description: "Your debut marks the beginning of adulthood – make it extraordinary. Our complete debut packages combine sophisticated cuisine with elegant presentations that match the significance of this milestone.",
      features: [
        "Sophisticated menu planning",
        "Elegant table arrangements",
        "Professional service staff",
        "Complete event coordination",
        "Custom decoration options"
      ],
      icon: Crown,
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/pexels-bertellifotografia-16120159.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9wZXhlbHMtYmVydGVsbGlmb3RvZ3JhZmlhLTE2MTIwMTU5LmpwZyIsImlhdCI6MTc1NjIwMzY3NSwiZXhwIjo4ODE1NjExNzI3NX0.-AKzD2HvedURXfkNJV1afgiJFDHF7suLiUoYRRlu1Dw",
      cta: "Get Debut Quote",
      imageFirst: true
    },
    {
      id: 3,
      title: "Complete Kiddie Package",
      subtitle: "Fun, Colorful & Delicious Celebrations",
      description: "Children's parties should be magical experiences filled with joy, laughter, and delicious food. Our kiddie packages are specially designed with young guests in mind.",
      features: [
        "Kid-friendly menu options",
        "Colorful food presentations",
        "Fun serving styles",
        "Parent-approved quality",
        "Complete party coordination"
      ],
      icon: Cake,
      image: "https://mdzljfhbkaxrhahqhmzz.supabase.co/storage/v1/object/sign/xzeron_data/pexels-vidalbalielojrfotografia-14457444.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MWZhM2E2OS1kODc3LTRlYTctYWRkYy1hN2E3Y2ZmM2YxNzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ4emVyb25fZGF0YS9wZXhlbHMtdmlkYWxiYWxpZWxvanJmb3RvZ3JhZmlhLTE0NDU3NDQ0LmpwZyIsImlhdCI6MTc1NjIwMzQ4MiwiZXhwIjozMTUzNzcyNDY2NzQ4Mn0.QVn-8DnhJrautkr0pLycySzumu5zLYZfF6pksUkuMNs",
      cta: "Get Kiddie Quote",
      imageFirst: false
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">Package Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete catering packages designed for every special celebration
          </p>
        </div>

        {/* Alternating Two-Column Layout */}
        <div className="space-y-20">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
              pkg.imageFirst ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Image Column */}
              <div className={`${pkg.imageFirst ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="w-full h-80 overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gold-light">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                        <pkg.icon className="w-4 h-4 text-white fill-current" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Complete Package</div>
                        <div className="text-xs text-gray-600">All Inclusive</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`${pkg.imageFirst ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                      <pkg.icon className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brown-primary">{pkg.title}</h3>
                      <p className="text-gold-primary font-medium">{pkg.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {pkg.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
