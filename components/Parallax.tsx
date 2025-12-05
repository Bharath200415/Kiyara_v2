import React, { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50, className = '' }) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far element is from center of screen
      // 0 means centered, -1 means above, 1 means below (roughly)
      if (top < windowHeight && top + height > 0) {
        const percent = (top + height / 2 - windowHeight / 2) / windowHeight;
        setOffsetY(percent * offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div 
        style={{ transform: `translateY(${offsetY}px)`, transition: 'transform 0.1s linear' }}
        className="h-full w-full"
      >
        {children}
      </div>
    </div>
  );
};