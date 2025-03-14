
import React from 'react';
import { Building, Factory, ShoppingBag, Store } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';

const industries = [
  {
    icon: Factory,
    name: 'Produkcja',
    description: 'Firmy produkcyjne o dużym zużyciu energii osiągają największe oszczędności dzięki optymalizacji taryf i harmonogramu produkcji.',
    averageSavings: '27%',
    color: 'bg-blue-100'
  },
  {
    icon: Building,
    name: 'Biura i usługi',
    description: 'Firmy usługowe mogą znacząco zredukować koszty energii elektrycznej bez wpływu na komfort pracy i obsługę klientów.',
    averageSavings: '37%',
    color: 'bg-green-100'
  },
  {
    icon: Store,
    name: 'Handel detaliczny',
    description: 'Sklepy i centra handlowe mogą obniżyć rachunki za prąd przy zachowaniu pełnej funkcjonalności i oświetlenia powierzchni sprzedaży.',
    averageSavings: '28%',
    color: 'bg-yellow-100'
  },
  {
    icon: ShoppingBag,
    name: 'Hotelarstwo i gastronomia',
    description: 'Hotele i restauracje mogą znacznie zredukować koszty energii, utrzymując najwyższy standard obsługi gości.',
    averageSavings: '32%',
    color: 'bg-red-100'
  }
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="section-padding bg-energo-light-gray relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-energo-yellow opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-energo-navy opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <SectionTitle 
          subtitle="Dla kogo"
          title="Rozwiązanie dla różnych branż"
          description="Nasz system optymalizacji działa efektywnie w różnych sektorach biznesowych. Sprawdź średnie oszczędności dla swojej branży."
          center
          className="max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <FadeInSection 
              key={index} 
              delay={index * 100} 
              direction="up"
              className="h-full"
            >
              <div className="relative h-full bg-white rounded-xl p-6 shadow-sm text-center group hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 transition-opacity group-hover:opacity-30 z-0"></div>
                
                <div className="flex flex-col items-center relative z-10">
                  <div className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mb-4`}>
                    <industry.icon size={30} className="text-energo-navy" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-energo-navy">
                    {industry.name}
                  </h3>
                  
                  <div className="mb-4 text-energo-yellow font-bold text-4xl">
                    {industry.averageSavings}
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    średnia oszczędność
                  </p>
                  
                  <div className="w-16 h-1 bg-energo-yellow/30 rounded-full my-4"></div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <FadeInSection direction="left">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-energo-navy">
                Średnie oszczędności w liczbach
              </h3>
              
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-energo-navy">
                        Redukcja kosztów energii
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-energo-yellow">
                        23%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "23%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-energo-yellow"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-energo-navy">
                        Zwrot z inwestycji (ROI)
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-energo-yellow">
                        347%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-energo-yellow"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-energo-navy">
                        Czas wdrożenia optymalizacji
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-energo-yellow">
                        30 dni
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-energo-yellow"></div>
                  </div>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-energo-navy">
                        Zadowolenie klientów
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-energo-yellow">
                        98%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "98%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-energo-yellow"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection direction="right">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-energo-navy">
                Korzyści finansowe
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="min-w-[60px] w-[60px] h-[60px] rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-energo-navy mb-1">
                      Mała firma (do 20 pracowników)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Średnia roczna oszczędność: <span className="font-semibold text-energo-yellow">8 000 - 15 000 zł</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="min-w-[60px] w-[60px] h-[60px] rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-energo-navy mb-1">
                      Średnia firma (20-100 pracowników)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Średnia roczna oszczędność: <span className="font-semibold text-energo-yellow">20 000 - 60 000 zł</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="min-w-[60px] w-[60px] h-[60px] rounded-lg bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-energo-navy mb-1">
                      Duża firma (powyżej 100 pracowników)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Średnia roczna oszczędność: <span className="font-semibold text-energo-yellow">80 000 - 250 000+ zł</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="min-w-[60px] w-[60px] h-[60px] rounded-lg bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-energo-navy mb-1">
                      Przemysł produkcyjny
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Średnia roczna oszczędność: <span className="font-semibold text-energo-yellow">100 000 - 500 000+ zł</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Stats;
