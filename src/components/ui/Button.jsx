import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'bg-charcoal text-white hover:bg-charcoal/90',
    secondary: 'bg-gold text-charcoal hover:bg-gold/90',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    ghost: 'text-charcoal hover:bg-charcoal/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium rounded-lg transition-all duration-250 btn-hover
        ${variants[variant]} ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;