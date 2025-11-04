import React from 'react';

const Grid=({children,cols=3,gap=6,className='',responsive=true})=> {
  const getGridClasses=()=> {
    if (!responsive) {
      return `grid-cols-${cols}`;
    }
    switch (cols) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`grid ${getGridClasses()} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;