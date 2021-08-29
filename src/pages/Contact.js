import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

export default function Contact() {
  useEffect(() => {
    document.title = 'Portfolio | Contact';
  }, []);
  return (
    <>
      <ContactSection />
      <Map />
    </>
  );
}
