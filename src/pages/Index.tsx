
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import EbookPopup from '@/components/EbookPopup';

const Index: React.FC = () => {
  const [showEbookPopup, setShowEbookPopup] = React.useState(false);
  
  // Popup pojawi się po 5 sekundach od załadowania strony
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEbookPopup(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetId = anchor.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 80; // Adjust according to the header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <BackToTop />
      
      {/* Ebook download popup */}
      <EbookPopup 
        isOpen={showEbookPopup} 
        onOpenChange={setShowEbookPopup} 
      />
    </div>
  );
};

// Back to top button component
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 p-3 rounded-full bg-energo-yellow text-energo-navy shadow-md transition-all duration-300 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Przewiń do góry"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Index;
