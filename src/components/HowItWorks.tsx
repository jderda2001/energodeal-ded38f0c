
import React from 'react';
import { ClipboardCheck, FileSpreadsheet, TrendingDown, ReceiptCheck } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Analiza rachunków',
    description: 'Analizujemy Twoje rachunki za energię i identyfikujemy potencjalne oszczędności bez konieczności zmian w Twojej działalności.',
    delay: 100
  },
  {
    icon: FileSpreadsheet,
    title: 'Plan optymalizacji',
    description: 'Przygotowujemy szczegółowy plan optymalizacji dopasowany do specyfiki Twojej firmy i jej potrzeb energetycznych.',
    delay: 200
  },
  {
    icon: TrendingDown,
    title: 'Wdrożenie zmian',
    description: 'Wdrażamy ustalone zmiany w taryfach, umowach oraz profilach zużycia, dbając o minimalne zaangażowanie z Twojej strony.',
    delay: 300
  },
  {
    icon: ReceiptCheck,
    title: 'Mierzalne oszczędności',
    description: 'Monitorujemy rezultaty i dostarczamy regularne raporty o osiągniętych oszczędnościach. Płacisz tylko za realne zmniejszenie kosztów.',
    delay: 400
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-energo-light-gray">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Proces"
          title="Jak optymalizujemy Twoje rachunki za prąd?"
          description="Nasz prosty, 4-stopniowy proces pozwala Ci zaoszczędzić na energii elektrycznej bez żadnych zakłóceń w działalności firmy."
          center
          className="max-w-2xl mx-auto"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <FadeInSection key={index} delay={step.delay} direction="up">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-energo-yellow/20 text-energo-navy">
                    <step.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-energo-navy/10 w-8 h-8 rounded-full flex items-center justify-center text-energo-navy font-semibold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center flex-grow">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href="#contact" className="btn-primary">
            Rozpocznij proces optymalizacji
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
