import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);
