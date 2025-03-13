
import React from 'react';
import { Facebook, Mail, Phone, Instagram } from 'lucide-react';

const FooterLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({
  href,
  children
}) => <a href={href} className="text-gray-600 hover:text-energo-yellow transition-colors">
    {children}
  </a>;

// Custom TikTok icon since it's not available in lucide-react
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img alt="EnerGoDeal" src="/lovable-uploads/b07ead46-a3bd-4d3c-8d44-5f687b06e346.png" className="h-[96px]" />
            </div>
            
            <p className="text-gray-600 mb-6">
              Pomagamy polskim firmom płacić mniej za energię elektryczną poprzez profesjonalną optymalizację rachunków i umów.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61568254714380" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energo-yellow hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/energodeal" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energo-yellow hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@energodeal" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energo-yellow hover:text-white transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-energo-navy">
              Usługi
            </h4>
            <ul className="space-y-2">
              <li><FooterLink href="#how-it-works">Audyt energetyczny</FooterLink></li>
              <li><FooterLink href="#benefits">Optymalizacja taryf</FooterLink></li>
              <li><FooterLink href="#benefits">Renegocjacja umów</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-energo-navy">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-energo-yellow" />
                <a href="tel:+48667752605" className="text-gray-600 hover:text-energo-yellow transition-colors">
                  +48 667 752 605
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-energo-yellow" />
                <a href="mailto:j.witek@energodeal.pl" className="text-gray-600 hover:text-energo-yellow transition-colors">
                  j.witek@energodeal.pl
                </a>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-6 text-energo-navy">
              Dokumenty
            </h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Polityka prywatności</FooterLink></li>
              <li><FooterLink href="#">Warunki korzystania</FooterLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ENERGO DEAL JAKUB WITEK. Wszelkie prawa zastrzeżone.
          </div>
          
          <div className="flex space-x-6">
            <FooterLink href="#">Polityka prywatności</FooterLink>
            <FooterLink href="#">Warunki korzystania</FooterLink>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
