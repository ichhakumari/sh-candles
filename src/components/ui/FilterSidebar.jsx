import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import ProductCard from './ProductCard';

const FilterSidebar = ({
  filters,
  priceRange,
  handleAvailabilityChange,
  handlePriceChange,
  resetFilterGroup,
  featuredProducts,
  inStockCount,
  outOfStockCount
}) => {
  return (
    <div className="space-y-8 pb-6">
      {/* Availability Filter */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-charcoal text-lg">AVAILABILITY</h3>
          <button
            onClick={() => resetFilterGroup('availability')}
            className="text-xs font-medium text-warm-grey hover:text-gold uppercase tracking-wider"
          >
            Reset
          </button>
        </div>
        <div className="space-y-3">
          <label className="flex items-center text-warm-grey hover:text-charcoal transition-colors cursor-pointer">
            <input
              type="checkbox"
              value="in_stock"
              onChange={handleAvailabilityChange}
              checked={filters.availability.includes('in_stock')}
              className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
            />
            <span className="ml-3">Order Now ({inStockCount})</span>
          </label>
          <label className="flex items-center text-warm-grey hover:text-charcoal transition-colors cursor-pointer">
            <input
              type="checkbox"
              value="out_of_stock"
              onChange={handleAvailabilityChange}
              checked={filters.availability.includes('out_of_stock')}
              className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
            />
            <span className="ml-3">Out Of Stock ({outOfStockCount})</span>
          </label>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price Filter */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-charcoal text-lg">PRICE</h3>
          <button
            onClick={() => resetFilterGroup('price')}
            className="text-xs font-medium text-warm-grey hover:text-gold uppercase tracking-wider"
          >
            Reset
          </button>
        </div>
        <p className="text-sm text-warm-grey mb-4">
          The highest price is ₹{priceRange.max.toFixed(2)}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-lg text-warm-grey">₹</span>
          <input
            type="number"
            name="min"
            value={filters.price.min}
            onChange={handlePriceChange}
            placeholder="From"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold focus:ring-gold sm:text-sm px-3 py-2"
          />
          <span className="text-lg text-warm-grey">₹</span>
          <input
            type="number"
            name="max"
            value={filters.price.max}
            onChange={handlePriceChange}
            placeholder="To"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold focus:ring-gold sm:text-sm px-3 py-2"
          />
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div>
          <h3 className="font-medium text-charcoal text-lg mb-4">FEATURED PRODUCT</h3>
          <div className="space-y-4">
            {featuredProducts.slice(0, 5).map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="flex items-center space-x-3 group">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors leading-tight">
                    {product.name}
                  </p>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <p className="text-sm text-charcoal font-semibold">
                      ₹{product.price.toFixed(2)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-xs text-warm-grey line-through">
                        ₹{product.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;