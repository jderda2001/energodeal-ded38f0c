
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';

const faqs = [
  {
    question: "Jak długo trwa proces optymalizacji rachunków za prąd?",
    answer: "Cały proces, od pierwszej analizy do wdrożenia rozwiązań, zajmuje zazwyczaj 14-30 dni, w zależności od wielkości firmy i złożoności jej infrastruktury energetycznej. Wdrożenie zmian nie wymaga przerwania działalności firmy."
  },
  {
    question: "Na czym polega model płatności tylko za wyniki?",
    answer: "Nasze wynagrodzenie stanowi ustalony procent (zwykle 30-40%) od faktycznie osiągniętych oszczędności. Jeżeli nie przyniesie to korzyści finansowych, nie ponosisz żadnych kosztów. Nie pobieramy żadnych opłat wstępnych ani stałych. To model w 100% oparty na rezultatach."
  },
  {
    question: "Czy wdrożenie zmian wymaga inwestycji w nowy sprzęt?",
    answer: "Nie, nasza metoda nie wymaga zakupu nowego sprzętu ani modyfikacji istniejącej infrastruktury. Optymalizacja dotyczy głównie umów, taryf i profili zużycia energii, a nie zmiany fizycznych urządzeń."
  },
  {
    question: "Czy optymalizacja wpłynie na komfort pracy lub jakość usług?",
    answer: "Absolutnie nie. Nasze rozwiązania są zaprojektowane tak, by nie wpływać negatywnie na warunki pracy, komfort czy jakość świadczonych usług. Wszystkie zmiany są nieodczuwalne dla pracowników i klientów."
  },
  {
    question: "Czy moja firma kwalifikuje się do optymalizacji?",
    answer: "Większość firm z rachunkami za energię elektryczną przekraczającymi 3000 zł miesięcznie może skorzystać z naszych usług. Najlepsze efekty osiągamy dla firm produkcyjnych, handlowych, usługowych, hoteli i restauracji. Najlepiej wypełnić formularz kontaktowy, a nasz ekspert przeprowadzi wstępną analizę potencjału oszczędności."
  },
  {
    question: "Jak weryfikowane są osiągnięte oszczędności?",
    answer: "Oszczędności są mierzone poprzez porównanie aktualnych rachunków z historycznymi, z uwzględnieniem sezonowości i zmian w działalności firmy. Przygotowujemy regularne, przejrzyste raporty pokazujące faktyczne oszczędności w złotówkach."
  },
  {
    question: "Czy usługa wymaga zmiany dostawcy energii?",
    answer: "Niekoniecznie. W wielu przypadkach optymalizacja jest możliwa u obecnego dostawcy. Jeśli zmiana dostawcy byłaby korzystna, przedstawimy taką opcję, ale decyzja zawsze należy do klienta."
  },
  {
    question: "Co jeśli mamy już podpisane długoterminowe umowy?",
    answer: "Nawet przy istniejących umowach możemy znaleźć obszary do optymalizacji. Nasz zespół prawny analizuje zawarte kontrakty i znajduje legalne możliwości wprowadzenia korzystnych zmian lub renegocjacji warunków."
  }
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-energo-light-gray">
      <div className="container-custom">
        <SectionTitle 
          subtitle="FAQ"
          title="Najczęściej zadawane pytania"
          description="Odpowiedzi na pytania, które najczęściej zadają nam klienci rozważający optymalizację rachunków za energię elektryczną."
          center
          className="max-w-2xl mx-auto"
        />

        <FadeInSection className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline font-medium text-energo-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a href="#contact" className="btn-primary">
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
