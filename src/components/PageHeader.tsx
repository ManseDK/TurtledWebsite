
import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  glowColor?: 'blue' | 'white' | 'lime';
  textColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  glowColor = 'white',
  textColor = 'text-white'
}) => {
  const glowClass = {
    blue: 'shadow-glow',
    white: 'shadow-glow-white',
    lime: 'shadow-glow-lime'
  }[glowColor];

  return (
    <section className="pt-32 pb-16 px-4 relative bg-gradient-to-b from-black to-black/90">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className={`arcade-text text-4xl md:text-5xl ${textColor} mb-6 ${glowClass}`}>
          {title}
        </h1>
        <p className="text-lg text-blue-300 max-w-2xl mx-auto clean-text">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
