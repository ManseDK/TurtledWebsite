
import { useEffect, useRef } from 'react';

interface TurtleAnimationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  hidden?: boolean; // New prop to control visibility
}

const TurtleAnimation = ({ 
  className = "", 
  size = 'md',
  hidden = false // Default to visible
}: TurtleAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Map size string to actual pixel values
  const sizeMap = {
    sm: 80,
    md: 150,
    lg: 220
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Random starting position
    const randomX = Math.random() * 30 - 15;
    const randomY = Math.random() * 30 - 15;
    const randomDelay = Math.random() * 2;
    
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    element.style.animationDelay = `${randomDelay}s`;
  }, []);

  // If hidden is true, don't render anything
  if (hidden) return null;

  return (
    <div 
      ref={ref}
      className={`relative animate-float ${className}`}
      style={{ width: sizeMap[size], height: sizeMap[size] }}
    >
      <img 
        src="/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png" 
        alt="Minecraft Turtle" 
        className="turtle-pixel w-full h-full object-contain"
      />
      {/* Air bubbles */}
      <div className="absolute top-0 right-0 opacity-70">
        <div className="w-3 h-3 bg-white rounded-full absolute -top-5 -right-2 animate-bounce-small" style={{ animationDelay: '0.3s'}}></div>
        <div className="w-2 h-2 bg-white rounded-full absolute -top-2 right-2 animate-bounce-small" style={{ animationDelay: '0.7s'}}></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full absolute -top-8 right-0 animate-bounce-small" style={{ animationDelay: '1.1s'}}></div>
      </div>
    </div>
  );
};

export default TurtleAnimation;
