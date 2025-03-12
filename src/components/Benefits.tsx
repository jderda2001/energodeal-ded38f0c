
import React from 'react';
import { Banknote, Clock, FileCheck, ShieldCheck, Lightbulb, BarChart3 } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Banknote,
    title: 'Realne oszczędności',
    description: 'Średnio 23% niższe rachunki za energię elektryczną dla naszych klientów biznesowych.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: ShieldCheck,
    title: 'Zero ryzyka',
    description: 'Płacisz tylko za faktycznie osiągnięte oszczędności. Brak efektów oznacza brak opłat.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Clock,
    title: 'Szybkie wdrożenie',
    description: 'Cały proces optymalizacji trwa maksymalnie 30 dni, bez wpływu na działalność firmy.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: FileCheck,
    title: 'Pełna zgodność z prawem',
    description: 'Wszystkie optymalizacje są w 100% legalne i zgodne z obowiązującymi przepisami energetycznymi.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Lightbulb,
    title: 'Eksperci w branży',
    description: 'Nasz zespół to doświadczeni specjaliści z wieloletnim doświadczeniem w sektorze energetycznym.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: BarChart3,
    title: 'Przejrzyste raporty',
    description: 'Regularne raporty pokazujące dokładnie ile i na czym zaoszczędziła Twoja firma.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Korzyści"
          title="Co zyskuje Twoja firma?"
          description="Nasze rozwiązania zapewniają wymierne korzyści finansowe przy zachowaniu pełnego bezpieczeństwa i transparentności działań."
          center
          className="max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <FadeInSection 
              key={index} 
              delay={index * 100} 
              direction="up"
              className="h-full"
            >
              <div className="relative h-full p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] group">
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-20",
                  benefit.bgColor
                )}></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn(
                    "flex items-center justify-center p-3 rounded-lg",
                    benefit.bgColor
                  )}>
                    <benefit.icon className={benefit.color} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-energo-navy">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-energo-navy to-energo-navy/90 text-white text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Zacznij oszczędzać bez ryzyka</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Nie wymagamy żadnych przedpłat ani zobowiązań. Wynagrodzenie pobieramy tylko jako procent od realnie osiągniętych oszczędności.
          </p>
          <a href="#contact" className="bg-energo-yellow text-energo-navy px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors inline-block">
            Sprawdź swoje oszczędności
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
