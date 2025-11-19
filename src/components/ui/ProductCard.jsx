import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMessageSquare } = FiIcons;

const ProductCard = ({ product, compact = false }) => {
  const cardHeight = compact ? 'h-48' : 'h-72';
  const textSize = compact ? 'text-sm' : 'text-base';
  const priceSize = compact ? 'text-base' : 'text-lg';

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(
      `Hi! I'd like to order ${product.name}. Please let me know availability and pricing details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="group shadow-md shadow-gray-400/50 hover:shadow-lg hover:shadow-gray-400/60 rounded-lg overflow-hidden bg-white transition-all duration-300">
      {/* <motion.div whileHover={{ y: -5 }} className="group"> */}
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/30 transition-all duration-300">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full ${cardHeight} object-cover group-hover:scale-105 transition-transform duration-300`}
            loading="lazy"
          />
          {product.discount && (
            <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discount}%
            </div>
          )}
          {/* Quick action buttons on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-charcoal px-4 py-2 rounded-md text-sm font-medium hover:bg-gold hover:text-white transition-colors">
              Quick View
            </button>
          </div>
        </div>
        {/* Top trending products */}
        {/* Content Container */}
        <div className="pt-4 text-center">
          <h3 className={`${textSize} font-medium text-charcoal mb-2 line-clamp-2 min-h-[2.5em]`}>
            {product.name}
          </h3>
          <div className="flex justify-center items-baseline space-x-2 mb-2">
            <span className={`${priceSize} font-semibold text-red-600`}>
              Rs. {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-warm-grey line-through">
                Rs. {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
      {/* Order and WhatsApp buttons */}
      <div className="mt-3 flex flex-col gap-2 px-4 pb-4">
        <Link to={`/product/${product.id}`}>
          <button className="w-full bg-[#C5B391] text-black py-2 rounded-md hover:bg-[#bda881] transition-colors text-sm font-medium">
            Order Now
          </button>
        </Link>
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
        >
          <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </button>
      </div>


    </motion.div>
  );
};

export default ProductCard;