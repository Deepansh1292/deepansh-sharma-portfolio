import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">{title}</h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto break-words">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mt-6"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;