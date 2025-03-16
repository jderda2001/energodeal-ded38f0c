
import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger 
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileMenuProps {
  links: {
    title: string;
    href: string;
  }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const handleLinkClick = (href: string) => {
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    closeMenu();
  };

  // Use the Drawer component for a better mobile experience
  if (isMobile) {
    return (
      <div className="md:hidden">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button
              className="p-2 rounded-md text-energo-navy focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu size={24} />
            </button>
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerOverlay className="bg-black/60" />
            <DrawerContent className="h-[92vh] focus:outline-none">
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <DrawerClose asChild>
                    <button
                      className="p-2 rounded-md text-energo-navy hover:text-energo-yellow transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </DrawerClose>
                </div>
                
                <nav className="px-8 py-4 flex-1">
                  <ul className="space-y-6">
                    {links.map((link) => (
                      <li key={link.href}>
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="text-xl font-medium text-energo-navy hover:text-energo-yellow transition-colors block py-2 text-left w-full"
                        >
                          {link.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                {/* "Zaoszczędź" button in mobile menu */}
                <div className="mt-auto px-8 pb-8 pt-4">
                  <button
                    onClick={() => handleLinkClick('#contact')}
                    className="w-full py-4 px-4 bg-energo-yellow text-energo-navy font-medium rounded-md hover:bg-energo-yellow/90 transition-colors text-lg"
                  >
                    Zaoszczędź
                  </button>
                </div>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      </div>
    );
  }

  // Fallback to original menu for non-mobile or if isMobile hasn't been determined yet
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
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="text-lg font-medium text-energo-navy hover:text-energo-yellow transition-colors w-full text-left"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
          
          {/* "Zaoszczędź" button in mobile menu */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => handleLinkClick('#contact')}
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
