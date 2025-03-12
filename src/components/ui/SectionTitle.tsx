
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  center = false,
  className
}) => {
  return (
    <div className={cn(
      'mb-12',
      center ? 'text-center mx-auto' : '',
      className
    )}>
      {subtitle && (
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-energo-navy bg-energo-yellow/20 rounded-full">
          {subtitle}
        </div>
      )}
      <h2 className="mb-4 font-bold">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
