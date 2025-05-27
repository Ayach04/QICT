'use client';

import React from 'react';
import Slider from './components/Slider';
import WhyChooseUs from './components/WhyChooseUs';
import OurProducts from './components/OurProducts';
import ServiceProcess from './components/ServiceProcess';
import Services from './components/Services';

export default function Accueil() {
  return (
    <main className="home">
      {/* Slider */}
      <Slider />

      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      <ServiceProcess />

      <OurProducts />

      
    </main>
  );
}
