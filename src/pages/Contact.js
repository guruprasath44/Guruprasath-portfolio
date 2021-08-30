import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  useEffect(() => {
    document.title = 'Portfolio | Contact';
  }, []);
  return (
    <>
      <ContactSection />
    </>
  );
}
