import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Secret to Perfect Event Planning: A Caterer's Guide",
      excerpt: "Discover the essential steps and insider tips that professional caterers use to ensure every event runs smoothly and exceeds expectations.",
      image: "📋",
      category: "Event Planning",
      readTime: "5 min read",
      author: "Chef Xzeron",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Seasonal Menu Inspirations: What's Fresh This Month",
      excerpt: "Explore our curated seasonal menus featuring the freshest local ingredients and innovative flavor combinations that will delight your guests.",
      image: "🍃",
      category: "Menu Ideas",
      readTime: "4 min read",
      author: "Chef Xzeron",
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      title: "Behind the Recipe: The Story of Our Signature Dishes",
      excerpt: "Learn the fascinating history and inspiration behind our most beloved dishes, from traditional family recipes to modern culinary innovations.",
      image: "👨‍🍳",
      category: "Behind the Scenes",
      readTime: "6 min read",
      author: "Chef Xzeron",
      date: "Dec 5, 2024"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-primary mb-4">The Xzeron Kitchen Chronicles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, recipes, and insights from our culinary experts
          </p>
        </div>

        {/* Three-Column Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-gold-light to-cream flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gold-primary bg-gold-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brown-primary mb-3 group-hover:text-gold-primary transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read Our Blog Link */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Read Our Blog
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
