
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookOpen, Info, X } from 'lucide-react';

interface EbookPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Wprowadź prawidłowy adres e-mail"),
  phone: z.string().min(9, "Wprowadź prawidłowy numer telefonu").max(15)
});

const EbookPopup: React.FC<EbookPopupProps> = ({ isOpen, onOpenChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Integracja z Make.com - wysyłka danych do webhooka
      const response = await fetch('https://hook.eu2.make.com/ts6hnm1h9viumlf7ohuksh593vpit1q8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name || '',
          email: values.email,
          phone: values.phone,
          timestamp: new Date().toISOString(),
          source: window.location.href
        }),
      });

      if (!response.ok) {
        throw new Error('Błąd podczas wysyłania danych');
      }
      
      toast({
        title: "Dziękujemy!",
        description: "Ebook został wysłany na podany adres email.",
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Wystąpił błąd",
        description: "Nie udało się wysłać ebooka. Spróbuj ponownie później.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-[95%] max-h-[90vh] overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 rounded-xl" closeButton={false}>
        <button 
          onClick={() => onOpenChange(false)} 
          className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition-colors z-10"
          aria-label="Zamknij"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
        </button>
        
        <DialogHeader className="pb-2">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="bg-energo-yellow/20 p-2 sm:p-3 rounded-full">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-energo-yellow" />
            </div>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
            Pobierz darmowy ebook!
          </DialogTitle>
          <DialogDescription className="text-center max-w-sm mx-auto pt-1 sm:pt-2 text-sm sm:text-base">
            Wprowadź swoje dane, a wyślemy Ci nasz ekskluzywny poradnik 
            o efektywności energetycznej dla firm.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Twoje imię (opcjonalnie)"
                      className="w-full border-gray-300 focus:border-energo-yellow focus:ring-energo-yellow/20 py-1.5 sm:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Twój adres email"
                      className="w-full border-gray-300 focus:border-energo-yellow focus:ring-energo-yellow/20 py-1.5 sm:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Twój numer telefonu"
                      className="w-full border-gray-300 focus:border-energo-yellow focus:ring-energo-yellow/20 py-1.5 sm:py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-1 sm:pt-2">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-energo-navy hover:bg-energo-navy/90 text-white font-medium py-1.5 sm:py-2 h-auto"
              >
                {isSubmitting ? "Wysyłanie..." : "Pobierz teraz"}
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="mt-4 sm:mt-6 flex items-start gap-2 text-xs text-muted-foreground bg-gray-50 p-2 sm:p-3 rounded-lg">
          <Info className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-[10px] sm:text-xs">
            Wysyłając formularz, zgadzasz się na otrzymywanie materiałów informacyjnych na podany adres email oraz numer telefonu.
            Twoje dane są bezpieczne i nie udostępniamy ich osobom trzecim.
          </p>
        </div>
        
        <div className="mt-3 sm:mt-4 text-center">
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-[10px] sm:text-xs text-energo-navy/70 hover:text-energo-navy underline">
                Masz pytania? Skontaktuj się z nami
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 sm:w-80">
              <div className="space-y-2">
                <h4 className="font-medium">Kontakt</h4>
                <p className="text-xs sm:text-sm">Email: kontakt@energodeal.pl</p>
                <p className="text-xs sm:text-sm">Telefon: +48 123 456 789</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EbookPopup;
