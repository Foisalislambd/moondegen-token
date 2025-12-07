import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-neon-green text-black hover:bg-green-400 shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.7)] border-2 border-transparent",
    secondary: "bg-neon-purple text-white hover:bg-purple-600 shadow-[0_0_15px_rgba(176,38,255,0.5)] border-2 border-transparent",
    outline: "bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10"
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};