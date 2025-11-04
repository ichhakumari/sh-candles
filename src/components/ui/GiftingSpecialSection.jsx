import React from 'react';
import {motion} from 'framer-motion';
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
    <div className="group text-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`} className="block">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover" 
            loading="lazy" 
          />
        </Link>
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:text-gold transition-colors" aria-label="Compare">
            <SafeIcon icon={FiLayers} className="w-4 h-4" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:text-gold transition-colors" aria-label="Quick view">
            <SafeIcon icon={FiEye} className="w-4 h-4" />
          </button>
        </div>
        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button className="w-full bg-charcoal text-white py-2.5 rounded-sm hover:bg-warm-grey transition-colors text-sm font-semibold">
            Order Now
          </button>
        </div>
      </div>
      {/* Product Info */}
      <div className="pt-4 pb-6 px-4">
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

const GiftingSpecialSection = ({products}) => {
  if (!products || products.length === 0) return null;
  // Display only first 4 products for the 2x2 grid
  const displayProducts = products.slice(0, 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      {/* Left Side: 2x2 Product Grid */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {displayProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{opacity: 0, y: 50}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              transition={{delay: index * 0.1}}
            >
              <GiftingProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Right Side: Large Promotional Image */}
      <div className="lg:col-span-1">
        <motion.div 
          initial={{opacity: 0, x: 50}} 
          whileInView={{opacity: 1, x: 0}} 
          viewport={{once: true}} 
          transition={{delay: 0.3}} 
          className="h-full"
        >
          <Link to="/collection/gifting" className="block h-full">
            <div 
              className="h-full bg-cover bg-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[600px] lg:min-h-[700px]" 
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1616103689439-d33264175510?w=600&h=800&fit=crop')"}}
            >
              {/* Optional overlay content */}
              <div className="h-full bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">Premium Gift Collection</h3>
                  <p className="text-sm opacity-90">Perfect presents for every occasion</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftingSpecialSection;