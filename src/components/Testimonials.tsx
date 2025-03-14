
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Współpraca z EnerGoDeal przyniosła naszej firmie produkcyjnej oszczędności przekraczające 120 000 zł rocznie. Proces był prosty, a zespół bardzo profesjonalny.",
    author: "Marek Kowalski",
    position: "Dyrektor Operacyjny, Novatex Industries",
    rating: 5,
    industry: "Przemysł"
  },
  {
    quote: "Początkowo byliśmy sceptyczni, ale po 3 miesiącach zobaczyliśmy spadek rachunków o 26%. EnerGoDeal to profesjonaliści, którzy naprawdę znają się na optymalizacji kosztów energii.",
    author: "Anna Nowak",
    position: "Właściciel, Restauracja Bella Vista",
    rating: 5,
    industry: "Gastronomia"
  },
  {
    quote: "Nasza sieć sklepów zaoszczędziła ponad 35 000 zł w pierwszym roku współpracy. Cenimy sobie szczególnie transparentność i regularne raporty z wynikami oszczędności.",
    author: "Tomasz Wiśniewski",
    position: "Prezes, Retail Smart Sp. z o.o.",
    rating: 5,
    industry: "Handel detaliczny"
  },
  {
    quote: "Bez żadnych inwestycji z naszej strony i zmiany w funkcjonowaniu biura, udało się zredukować koszty energii o 19%. Polecam każdej firmie usługowej.",
    author: "Katarzyna Jankowska",
    position: "Dyrektor Finansowy, Legal Solutions",
    rating: 4,
    industry: "Usługi prawne"
  },
  {
    quote: "Hotelom szczególnie polecam usługi EnerGoDeal. Przy wysokim zużyciu energii, każdy procent oszczędności ma znaczenie, a nam udało się zredukować koszty o ponad 20%.",
    author: "Piotr Zieliński",
    position: "Właściciel, Hotel Panorama",
    rating: 5,
    industry: "Hotelarstwo"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      return newIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Opinie klientów"
          title="Co mówią firmy korzystające z naszych usług?"
          description="Poznaj doświadczenia firm, które dzięki współpracy z EnerGoDeal znacząco obniżyły swoje rachunki za energię elektryczną."
          center
          className="max-w-2xl mx-auto"
        />

        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-energo-navy hover:text-energo-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-energo-yellow/50"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-energo-navy hover:text-energo-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-energo-yellow/50"
              aria-label="Następna opinia"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden rounded-xl relative">
            <div className="absolute top-4 left-8 text-energo-yellow opacity-20 z-0">
              <Quote size={120} />
            </div>
            
            <div 
              className={cn(
                "transition-all duration-700 ease-in-out",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
            >
              <div className="bg-energo-light-gray p-8 md:p-12 rounded-xl relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonials[currentIndex].rating ? "text-energo-yellow fill-energo-yellow" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium mb-8 text-energo-navy italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-energo-navy rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-energo-navy">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-xs mt-1 inline-block px-2 py-1 bg-energo-yellow/20 rounded-full text-energo-navy">
                      {testimonials[currentIndex].industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => {
                    setIsAnimating(false);
                  }, 700);
                }}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                  index === currentIndex ? "bg-energo-yellow w-6" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <FadeInSection className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-energo-yellow mb-2">30+</div>
              <div className="text-lg font-semibold text-energo-navy mb-1">Zadowolonych klientów</div>
              <p className="text-gray-600 text-sm">Firm, które skutecznie obniżyły koszty energii dzięki naszym usługom</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-energo-yellow mb-2">700K+ zł</div>
              <div className="text-lg font-semibold text-energo-navy mb-1">Łącznych oszczędności</div>
              <p className="text-gray-600 text-sm">Kwota zaoszczędzona przez wszystkich naszych klientów łącznie</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-energo-yellow mb-2">98%</div>
              <div className="text-lg font-semibold text-energo-navy mb-1">Wskaźnik zadowolenia</div>
              <p className="text-gray-600 text-sm">Procent klientów zadowolonych z osiągniętych rezultatów</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Testimonials;
