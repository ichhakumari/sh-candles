import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../../common/SafeIcon';

const {
  FiMenu,
  FiX,
  FiSearch,
  FiHome,
  FiGift,
  FiSun,
  FiTrendingUp,
  FiBell,
  FiMessageSquare,
  FiCloudSnow,
} = FiIcons;
const { FaPrayingHands } = FaIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Jai Guruji', href: '/collection/jai-guruji', icon: FaPrayingHands },
    { name: 'Gifting Candles', href: '/collection/gifting', icon: FiGift },
    { name: 'Summer Special', href: '/collection/summer-special', icon: FiSun },
    { name: 'Winter Special', href: '/winter-special', icon: FiCloudSnow },
    { name: 'Trending Candles', href: '/collection/trending', icon: FiTrendingUp },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(
      "Hello! I'm interested in your candles. I'd like to inquire about your products."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      {/* --- DESKTOP HEADER --- */}
      <div className="hidden lg:block">
        {/* Top Bar */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-1 flex justify-start">
              <button
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Search"
              >
                <SafeIcon icon={FiSearch} className="w-6 h-6" />
              </button>
            </div>
           <div className="flex-shrink-0">
              <a href="#/" className="block">
                <img
                  src="/asserts/img/logo2.png"
                  alt="Sharoma Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            <div className="flex-1 flex justify-end items-center">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-charcoal hover:text-gold transition-colors group"
              >
                <SafeIcon icon={FiMessageSquare} className="w-7 h-7" />
                <div className="text-sm">
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-warm-grey group-hover:text-gold">Order Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Bar (Navigation) */}
        <div className="border-t border-gray-200">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <nav className="flex flex-1 justify-center items-center space-x-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gold ${
                      location.pathname === item.href
                        ? 'text-gold'
                        : 'text-charcoal'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-2 text-sm text-warm-grey">
                <SafeIcon icon={FiBell} className="w-4 h-4 text-charcoal" />
                <span className="font-medium text-charcoal">
                  Reach Us: +91-977-9880-180
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE HEADER --- */}
      <div className="lg:hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
            <Link to="/">
              <img
                src="https://i.ibb.co/7j5j1sM/sharoma-logo-line-art.png"
                alt="Sharoma Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="relative p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="WhatsApp Order"
            >
              <SafeIcon icon={FiMessageSquare} className="w-6 h-6" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-warm-grey/20 py-4 px-4 bg-white"
            >
              <div className="space-y-4 mb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 text-base font-medium transition-colors hover:text-gold ${
                      location.pathname === item.href
                        ? 'text-gold'
                        : 'text-charcoal'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="border-t border-warm-grey/20 pt-4 flex items-center space-x-2 text-sm text-warm-grey">
                <SafeIcon icon={FiBell} className="w-4 h-4 text-charcoal" />
                <span className="font-medium text-charcoal">
                  Reach Us: +91-977-9880-180
                </span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;