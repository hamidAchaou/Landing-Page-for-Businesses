// src/components/ui/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  loading = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-bold rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-white text-primary-600 hover:bg-gray-100 shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Use regular button for non-link behavior, or pass through if it's a link
  const ButtonElement = props.href ? motion.a : motion.button;

  return (
    <ButtonElement
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} text-center`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </ButtonElement>
  );
};