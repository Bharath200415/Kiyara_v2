import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm uppercase tracking-[0.15em] transition-all duration-300 font-bold rounded-full transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#255036] hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-[#7a9984] hover:shadow-lg",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-offwhite shadow-md hover:shadow-xl"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};