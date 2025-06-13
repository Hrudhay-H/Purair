
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Offerings from '@/components/Offerings';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { isLoading } = useAuth();
  
  useEffect(() => {
    // Script to handle scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once to reveal elements that are already visible
    setTimeout(handleScroll, 100);
    
    // Change page title
    document.title = 'Smart Poultry Tech - Modern Farm Monitoring Solutions';
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Mission />
      <Offerings />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
