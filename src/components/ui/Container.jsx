import React from 'react';

const Container = ({ children, className = '', size = 'default' }) => {
  // For full width layout, we remove max-width constraints and use 100vw
  return (
    <div className={`w-full px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;