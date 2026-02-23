import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
