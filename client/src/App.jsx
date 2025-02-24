import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Contact from './pages/Contact';
import OurDesign from './pages/OurDesign'
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="relative  pt-32">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourDesign" element={<OurDesign />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
