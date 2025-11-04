import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ResponsiveProductGrid = ({ 
  products, 
  layoutConfig,
  className = '',
  animate = true 
}) => {
  if (!products || products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-warm-grey text-lg">No products found.</p>
      </div>
    );
  }

  // Animation variants for staggered product appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const gridClasses = `
    grid gap-4 sm:gap-6
    ${layoutConfig?.gridSize || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4'}
    ${className}
  `;

  if (animate) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={gridClasses}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            layout
            className="transition-all duration-300"
          >
            <ProductCard 
              product={product} 
              compact={layoutConfig?.id >= 4}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <div key={product.id} className="transition-all duration-300">
          <ProductCard 
            product={product} 
            compact={layoutConfig?.id >= 4}
          />
        </div>
      ))}
    </div>
  );
};

export default ResponsiveProductGrid;