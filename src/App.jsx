import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Menu from './components/sections/Menu';
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
    <About />
    <Menu />
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
        <Route path="/login" element={<Login />} />
        <Route path="/blog-admin" element={<ProtectedRoute><BlogAdmin /></ProtectedRoute>} />
        <Route path="/blog-admin/posts" element={<ProtectedRoute><ExistingPosts /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;