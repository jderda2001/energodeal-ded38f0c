
import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  links: {
    title: string;
    href: string;
  }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
    closeMenu();
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-energo-navy focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
      />

      {/* Menu panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-energo-navy hover:text-energo-yellow transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-8 py-4">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-energo-navy hover:text-energo-yellow transition-colors"
                  onClick={closeMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          
          {/* "Zaoszczędź" button in mobile menu */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={scrollToContact}
              className="w-full py-3 px-4 bg-energo-yellow text-energo-navy font-medium rounded-md hover:bg-energo-yellow/90 transition-colors"
            >
              Zaoszczędź
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
