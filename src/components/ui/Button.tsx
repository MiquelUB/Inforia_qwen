import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-green-700 text-white hover:bg-green-800" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={${baseClasses}  }
    >
      {children}
    </button>
  );
};
