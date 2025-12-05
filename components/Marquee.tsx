import React from 'react';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-primary py-3 ${className}`}>
      <div className="inline-flex animate-marquee">
        {/* Repeat content enough times to ensure smooth loop on large screens */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, idx) => (
              <span key={idx} className="mx-6 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                {item} <span className="mx-4 text-accent">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};