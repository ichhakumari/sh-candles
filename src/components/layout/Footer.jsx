import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMessageSquare,
} = FiIcons;

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(
      "Hello! I'd like to inquire about your products."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-black text-white">
      {/* <footer className="bg-[#E5C9B6] text-[#3B2F2F]"> */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              {/* <h2 className="text-3xl font-serif font-semibold text-white">
                Sharoma
              </h2> */}
              <img src='/asserts/img/logobg.png' alt="logo" className="w-48 md:w-40 lg:w-44 h-auto mx-auto"></img>
            </Link>
            <p className="text-white mb-6 max-w-md leading-relaxed">
              Crafting premium candles that transform spaces into sanctuaries of
              calm and luxury. Each flame tells a story of artisanal excellence
              and sensory delight.
            </p>
            {/* WhatsApp CTA */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">
                Quick Order on WhatsApp
              </h3>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 px-6 py-3 bg-[#C6A27E] text-[#3B2F2F] font-medium rounded-lg hover:bg-[#C6A27E]/90 transition-colors"
              >
                <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
                <span>Chat with Us</span>
              </button>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-white hover:text-[#C6A27E] transition-colors"
                aria-label="Instagram"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-white hover:text-[#C6A27E] transition-colors"
                aria-label="Facebook"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-white hover:text-[#C6A27E] transition-colors"
                aria-label="Twitter"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">

              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/collection/jai-guruji"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  Jai Guruji Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/collection/gifting"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  Gifting
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  Shop All
                </Link>
              </li>

              <li>
                <Link
                  to="/winter-special"
                  className="text-white hover:text-[#C6A27E] transition-colors"
                >
                  Winter Special
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <SafeIcon
                  icon={FiMapPin}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">
                  268 St, South New York
                  <br /> NY 98944, United States
                </span>
              </div> */}
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+919779880180"
                  className="flex items-center space-x-3"
                >
                  <SafeIcon
                    icon={FiPhone}
                    className="w-5 h-5 text-white flex-shrink-0"
                  />
                  <span className="text-white">+91 977 988 0180</span>
                </a>

              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:sharomacandles.shop@gmail.com"
                  className="flex items-center space-x-3"
                >
                  <SafeIcon
                    icon={FiMail}
                    className="w-5 h-5 text-white flex-shrink-0"
                  />
                  <span className="text-white">sharomacandles.shop@gmail.com</span>
                </a>

              </div>

              {/* <div className="flex items-center space-x-3">
                <SafeIcon
                  icon={FiMessageSquare}
                  className="w-5 h-5 text-white flex-shrink-0"
                />
                 <span className="text-white">(+100) 666-456-7890</span> 
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3B2F2F]/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2024 Sharoma Candles. All rights reserved. Designed by Brandingpioneers.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-white hover:text-[#C6A27E] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white hover:text-[#C6A27E] text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;