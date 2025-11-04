import React from 'react';
import Container from './Container';

const Section = ({
  children,
  className = '',
  padding = 'default',
  background = 'transparent',
}) => {
  const paddingClasses = {
    sm: 'py-4 lg:py-6',
    default: 'py-6 lg:py-8',
    lg: 'py-8 lg:py-10',
    none: '',
  };
  
  const backgroundClasses = {
    transparent: '',
    white: 'bg-white',
    ivory: 'bg-ivory',
    charcoal: 'bg-charcoal text-white',
    // New section-specific background colors
    'hero': 'bg-[#FFF5ED]', // Creamy Ivory
    'gifting': 'bg-[#FAE9DC]', // Soft Peach Beige
    'promise': 'bg-[#F6E3D2]', // Warm Sand
    'message': 'bg-[#FDF2E9]', // Light Apricot Cream
    'trending': 'bg-[#EED6C4]', // Muted Caramel Beige
    'footer': 'bg-[#E5C9B6]', // Soft Clay
  };

  // Added margin bottom for spacing between sections
  const spacingClass = 'mb-3 lg:mb-4';

  return (
    <section
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${spacingClass} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;