
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = domRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (current) observer.unobserve(current);
          }
        });
      },
      { threshold }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay, threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-10';
        case 'down':
          return 'translate-y-[-10px]';
        case 'left':
          return 'translate-x-10';
        case 'right':
          return 'translate-x-[-10px]';
        default:
          return '';
      }
    }
    return '';
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-700',
        isVisible ? 'opacity-100 transform-none' : `opacity-0 ${getDirectionStyles()}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
