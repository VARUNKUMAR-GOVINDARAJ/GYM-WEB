// src/App.jsx
import React from 'react'

import Gallery from './components/Gallery';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import BMI from './components/BMI';
import JOIN from './components/JOIN';
import COACHES from './components/COACHE';
import BLOG from './components/Blog';
import Navbar from './components/Navbar';
import SchedulePage from './components/Schedule';
import COACHE from './components/Coaches';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Facilities />
      <BMI />
      <SchedulePage />
      <JOIN />
      <COACHES />
      <COACHE />
      <BLOG />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;