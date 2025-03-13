import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const FooterLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({
  href,
  children
}) => <a href={href} className="text-gray-600 hover:text-energo-yellow transition-colors">
    {children}
  </a>;
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img alt="EnerGoDeal" src="/lovable-uploads/b07ead46-a3bd-4d3c-8d44-5f687b06e346.png" className="h-[80px]" />
            </div>
            
            <p className="text-gray-600 mb-6">
              Pomagamy polskim firmom płacić mniej za energię elektryczną poprzez profesjonalną optymalizację rachunków i umów.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energo-yellow hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-energo-yellow hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
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
            &copy; {currentYear} EnerGoDeal. Wszelkie prawa zastrzeżone.
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