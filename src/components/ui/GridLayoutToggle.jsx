import React from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as MdIcons from 'react-icons/md';

const { MdApps } = MdIcons;

const GridLayoutToggle = ({ currentLayout, onLayoutChange }) => {
  const layoutOptions = [
    { 
      id: 2, 
      icon: MdApps, 
      label: '2 columns',
      gridSize: 'grid-cols-1 md:grid-cols-2',
      title: 'Display 2 products per row'
    },
    { 
      id: 3, 
      icon: MdApps, 
      label: '3 columns',
      gridSize: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      title: 'Display 3 products per row'
    },
    { 
      id: 4, 
      icon: MdApps, 
      label: '4 columns',
      gridSize: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      title: 'Display 4 products per row'
    },
    { 
      id: 5, 
      icon: MdApps, 
      label: '5 columns',
      gridSize: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
      title: 'Display 5 products per row'
    }
  ];

  return (
    <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-1">
      {layoutOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onLayoutChange(option)}
          title={option.title}
          className={`
            relative p-2 rounded-md transition-all duration-200
            ${currentLayout.id === option.id 
              ? 'bg-gold text-charcoal shadow-sm' 
              : 'text-warm-grey hover:text-charcoal hover:bg-gray-50'
            }
          `}
          aria-label={option.label}
          aria-pressed={currentLayout.id === option.id}
        >
          {/* Visual representation of grid layout */}
          <div className="w-5 h-5 relative">
            {/* Create dot pattern based on layout option */}
            <div className={`
              grid gap-0.5
              ${option.id === 2 ? 'grid-cols-2' : ''}
              ${option.id === 3 ? 'grid-cols-3' : ''}
              ${option.id === 4 ? 'grid-cols-2' : ''}
              ${option.id === 5 ? 'grid-cols-2' : ''}
            `}>
              {/* Render dots based on layout */}
              {Array.from({ length: option.id <= 4 ? 4 : 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`
                    w-1 h-1 rounded-full
                    ${currentLayout.id === option.id ? 'bg-charcoal' : 'bg-current'}
                  `}
                />
              ))}
            </div>
          </div>
          
          {/* Tooltip */}
          <div className={`
            absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
            px-2 py-1 text-xs text-white bg-charcoal rounded
            opacity-0 pointer-events-none transition-opacity duration-200
            ${currentLayout.id === option.id ? 'opacity-100' : 'group-hover:opacity-100'}
          `}>
            {option.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default GridLayoutToggle;