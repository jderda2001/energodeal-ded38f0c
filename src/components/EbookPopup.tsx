
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface EbookPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EbookPopup: React.FC<EbookPopupProps> = ({ isOpen, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Błąd",
        description: "Wprowadź prawidłowy adres email",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Tutaj możesz dodać integrację z API do zapisywania emaili
      // np. z Make.com lub Supabase
      
      // Symulacja opóźnienia podczas wysyłania
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Dziękujemy!",
        description: "Ebook został wysłany na podany adres email.",
      });
      
      onOpenChange(false);
      setEmail('');
    } catch (error) {
      console.error('Error sending ebook:', error);
      toast({
        title: "Wystąpił błąd",
        description: "Nie udało się wysłać ebooka. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Pobierz darmowy ebook!</DialogTitle>
          <DialogDescription>
            Wprowadź swój adres email, a wyślemy Ci nasz ekskluzywny poradnik o efektywności energetycznej.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="flex flex-col space-y-2">
            <Input
              type="email"
              placeholder="Twój adres email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "Wysyłanie..." : "Pobierz teraz"}
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-xs text-muted-foreground">
          Wysyłając formularz, zgadzasz się na otrzymywanie materiałów informacyjnych na podany adres email.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EbookPopup;
