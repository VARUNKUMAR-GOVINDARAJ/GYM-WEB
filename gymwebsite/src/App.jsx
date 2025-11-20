// src/App.jsx
import React from 'react'

import Gallery from './components/Gallery';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import BMI from './components/BMI';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Hero/>
        <AboutUs/>
        <Facilities />
        <BMI />
        <Gallery />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;