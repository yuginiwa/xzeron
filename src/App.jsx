import React from 'react'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Gallery from './components/sections/Gallery'
import GalleryTeaser from './components/sections/GalleryTeaser'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Menu />
      <Gallery />
      <GalleryTeaser />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App