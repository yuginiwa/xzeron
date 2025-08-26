import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';

import BestSellers from './components/sections/BestSellers';
import Gallery from './components/sections/Gallery';
import GalleryTeaser from './components/sections/GalleryTeaser';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import BlogAdmin from './components/sections/BlogAdmin';
import Login from './components/sections/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ExistingPosts from './components/sections/ExistingPosts';
import MenuPage from './components/pages/MenuPage';
import AboutPage from './components/pages/AboutPage';
import './App.css';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Header />
    {children}
    <Footer />
  </div>
);

const Home = () => (
  <>
    <Hero />
    <Services />
    
    <BestSellers />
    <Gallery />
    <GalleryTeaser />
    <Testimonials />
    <Blog />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/menu" element={<MainLayout><MenuPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog-admin" element={<ProtectedRoute><BlogAdmin /></ProtectedRoute>} />
        <Route path="/blog-admin/posts" element={<ProtectedRoute><ExistingPosts /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
