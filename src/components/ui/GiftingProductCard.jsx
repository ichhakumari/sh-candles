import React from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiHeart, FiLayers, FiEye, FiCheck, FiMessageSquare} = FiIcons;

const GiftingProductCard = ({product}) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(`Hi! I'd like to order ${product.name}. Please let me know availability and pricing details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="group text-center">
      <div className="relative overflow-hidden bg-white border border-gray-100">
        <Link to={`/product/${product.id}`} className="block">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-square object-cover" 
            loading="lazy" 
          />
        </Link>
        {product.discount && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:text-gold transition-colors" aria-label="Compare">
            <SafeIcon icon={FiLayers} className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:text-gold transition-colors" aria-label="Quick view">
            <SafeIcon icon={FiEye} className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button className="w-full bg-charcoal text-white py-2.5 rounded-sm hover:bg-warm-grey transition-colors text-sm font-semibold">
            Order Now
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-base font-medium text-charcoal mb-2 truncate">
          {product.name}
        </h3>
        <div className="flex justify-center items-baseline space-x-2 mb-2">
          <span className="text-lg font-semibold text-red-600">
            Rs. {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-warm-grey line-through">
              Rs. {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        {product.inStock && (
          <div className="flex justify-center items-center text-green-600 text-sm">
            <SafeIcon icon={FiCheck} className="w-4 h-4 mr-1" />
            <span>Order Now</span>
          </div>
        )}
        {/* WhatsApp button */}
        <button 
          onClick={handleWhatsAppClick}
          className="w-full mt-2 bg-green-600 text-white py-2 rounded-sm hover:bg-green-700 transition-colors text-sm font-semibold flex items-center justify-center space-x-1"
        >
          <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default GiftingProductCard;