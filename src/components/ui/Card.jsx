import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'default',
  shadow = 'default' 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-lg',
    lg: 'shadow-xl'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`
        bg-white rounded-lg ${shadowClasses[shadow]} ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;