import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiVolumeX, FiMessageSquare } = FiIcons;

const BestSellerProductCard = ({ product }) => {
  let tag = null;
  if (product.category === 'trending') {
    tag = 'Trending';
  } else if (product.isNew) {
    tag = 'New In';
  } else if (!product.inStock) {
    tag = 'Sold Out';
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(`Hi! I'd like to order ${product.name}. Please let me know availability and pricing details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 group transition-shadow duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`} className="block aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
        {tag && (
          <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            {tag}
          </div>
        )}
        {/* Example muted badge from screenshot */}
        <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center space-x-1">
          <SafeIcon icon={FiVolumeX} className="w-3 h-3" />
          <span>Muted</span>
        </div>
      </div>
      <div className="p-4 flex-grow text-center flex flex-col">
        <h3 className="text-xl font-semibold text-charcoal mb-2 truncate flex-grow">
          {product.name}
        </h3>

        <div className="flex items-center justify-center mb-3 space-x-2 ">
          <span className="text-lg font-bold text-charcoal">
            ₹{product.price.toFixed(0)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-warm-grey  line-through ">
              ₹{product.originalPrice.toFixed(0)}
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500  text-white text-[11px] font-bold px-2 py-0.5 rounded ">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="mt-auto pt-2">
          <Link to={`/product/${product.id}`}>
            <button className="w-full bg-[#C5B391] text-charcoal font-semibold py-2.5 rounded-lg hover:bg-[#bda881] transition-colors text-sm mb-2">
              Order Now
            </button>
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center justify-center space-x-1"
          >
            <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProductCard;