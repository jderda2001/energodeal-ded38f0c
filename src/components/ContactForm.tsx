
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from './ui/SectionTitle';
import FadeInSection from './ui/FadeInSection';
import { cn } from '@/lib/utils';
import { createClient } from '@supabase/supabase-js';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

// Initialize Supabase client
const supabaseUrl = 'https://xpgxbvazscgxvrnrfxpw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZ3hidmF6c2NneHZybnJmeHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMzcxMjgsImV4cCI6MjAyOTkxMzEyOH0.40NPk3cxqexZLkO-ZXlzDlZRLjmXV1WUuUj1OZWtAd0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Make.com webhook URL - Replace this with your actual webhook URL from Make.com
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/YOUR_WEBHOOK_ID_HERE";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    monthlyBill: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Submit to Supabase
      const { error: supabaseError } = await supabase.from('contact_submissions').insert([formData]);
      if (supabaseError) {
        console.error('Error submitting to Supabase:', supabaseError);
        toast({
          title: "Błąd podczas zapisywania formularza",
          description: "Dane nie zostały zapisane. Prosimy spróbować później.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Submit to Make.com webhook
      const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website_contact_form',
          timestamp: new Date().toISOString()
        }),
      });

      if (!makeResponse.ok) {
        console.error('Error submitting to Make.com:', makeResponse.statusText);
        // Continue with success message even if Make.com fails - we have the data in Supabase
      } else {
        console.log('Successfully submitted to Make.com');
      }

      setIsSuccess(true);
      toast({
        title: "Formularz wysłany pomyślnie!",
        description: "Nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin.",
        variant: "default"
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          monthlyBill: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Błąd podczas wysyłania formularza",
        description: "Spróbuj ponownie za chwilę",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Kontakt" 
          title="Obniż swoje rachunki za prąd już dziś" 
          description="Wypełnij formularz, a nasz ekspert przeprowadzi bezpłatną analizę potencjału oszczędności dla Twojej firmy." 
          center 
          className="max-w-2xl mx-auto" 
        />

        <FadeInSection direction="up" className="mt-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-energo-navy text-center">
                Formularz kontaktowy
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Nazwa firmy *
                    </label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="monthlyBill" className="block text-sm font-medium text-gray-700 mb-1">
                    Średni miesięczny rachunek za prąd *
                  </label>
                  <select 
                    id="monthlyBill" 
                    name="monthlyBill" 
                    value={formData.monthlyBill} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors" 
                    required
                  >
                    <option value="" disabled>Wybierz przedział</option>
                    <option value="< 3 000 zł">Poniżej 3 000 zł</option>
                    <option value="3 000 - 10 000 zł">3 000 - 10 000 zł</option>
                    <option value="10 000 - 30 000 zł">10 000 - 30 000 zł</option>
                    <option value="30 000 - 100 000 zł">30 000 - 100 000 zł</option>
                    <option value="> 100 000 zł">Powyżej 100 000 zł</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Wiadomość
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-energo-yellow/50 focus:border-energo-yellow focus:outline-none transition-colors"
                  ></Textarea>
                </div>
                
                <div className="text-sm text-gray-500">
                  * Pola wymagane
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess} 
                  className={cn(
                    "w-full py-7 rounded-md font-medium transition-all flex items-center justify-center gap-2",
                    isSuccess 
                      ? "bg-green-600 text-white" 
                      : "bg-energo-yellow text-energo-navy hover:bg-energo-yellow/90 hover:shadow-lg"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Wysyłanie...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Wysłano pomyślnie!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Wyślij formularz</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactForm;
