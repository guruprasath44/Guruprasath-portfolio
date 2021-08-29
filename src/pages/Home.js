import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HeroSection from '../components/HeroSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Portfolio | Home ';
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
