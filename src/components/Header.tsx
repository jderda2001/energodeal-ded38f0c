
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import MobileMenu from './ui/MobileMenu';

const navLinks = [{
  title: 'Jak to działa',
  href: '#how-it-works'
}, {
  title: 'Korzyści',
  href: '#benefits'
}, {
  title: 'Dla kogo',
  href: '#stats'
}, {
  title: 'Opinie klientów',
  href: '#testimonials'
}, {
  title: 'FAQ',
  href: '#faq'
}, {
  title: 'Kontakt',
  href: '#contact'
}];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-md', scrolled ? 'bg-white/90 shadow-sm py-3' : 'bg-transparent')}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo - increased by 20% */}
        <a href="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <img 
              alt="EnerGoDeal" 
              className="h-[19.2px] sm:h-24" 
              src="/lovable-uploads/384f033c-1a10-49cd-90c5-2cca227ef929.png" 
            />
          </div>
        </a>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
          <ul className="flex space-x-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-energo-navy/80 font-medium hover:text-energo-yellow transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-energo-yellow after:transition-all hover:after:w-full"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* "Zaoszczędź" button in the top right corner */}
        <button 
          onClick={scrollToContact} 
          className="hidden md:flex items-center justify-center px-5 py-2.5 bg-energo-yellow text-energo-navy font-medium rounded-md hover:bg-energo-yellow/90 transition-colors"
        >
          Zaoszczędź
        </button>

        {/* Mobile Menu */}
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
