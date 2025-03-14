
import React from 'react';
import { Bolt, ArrowRight, BookOpen } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Hero: React.FC = () => {
  return <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 opacity-10">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-energo-yellow blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-energo-navy blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection className="order-2 lg:order-1" direction="left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-energo-yellow/20 text-energo-navy font-medium text-sm mb-6">
                <Bolt size={16} className="text-energo-yellow" />
                <span>Optymalizacja rachunków za prąd dla firm</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Płać mniej za energię elektryczną w Twojej firmie
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Pomagamy przedsiębiorstwom w Polsce zredukować koszty energii elektrycznej nawet o 27%, bez zmian w działaniu firmy. Płacisz tylko za realne oszczędności.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary flex items-center justify-center gap-2 animate-pulse-glow">
                  <span>Sprawdź swoje oszczędności</span>
                  <ArrowRight size={18} />
                </a>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-ebook-popup'))}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <BookOpen size={18} />
                  <span>Pobierz darmowy ebook</span>
                </button>
              </div>
              
              <div className="flex items-center gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-energo-navy">27%</div>
                  <p className="text-sm text-gray-600">Średnia oszczędność</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-energo-navy">30+</div>
                  <p className="text-sm text-gray-600">Zadowolonych firm</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-energo-navy">0zł</div>
                  <p className="text-sm text-gray-600">Koszt wdrożenia</p>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Hide the image on mobile, show on lg screens and up */}
          <FadeInSection className="order-1 lg:order-2 hidden lg:block" direction="right">
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-energo-navy to-energo-navy/80 opacity-90 z-10"></div>
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80')"
              }}></div>
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
                  <Bolt size={64} className="text-energo-yellow mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Energia nie musi być droga</h3>
                  <p className="text-white/90 max-w-md">
                    Dzięki naszej unikalnej metodzie optymalizacji, pomagamy polskim firmom znacząco obniżyć koszty energii elektrycznej.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-energo-yellow rounded-full opacity-20 blur-md"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-energo-yellow rounded-full opacity-20 blur-md"></div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>;
};
export default Hero;
