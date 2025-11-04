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
    <footer className="bg-[#E5C9B6] text-[#3B2F2F]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-serif font-semibold text-[#C6A27E]">
                Sharoma
              </h2>
            </Link>
            <p className="text-[#3B2F2F] mb-6 max-w-md leading-relaxed">
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
                className="p-2 text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                aria-label="Instagram"
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                aria-label="Facebook"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
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
                  to="/shop"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  to="/collection/jai-guruji"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  Jai Guruji Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/collection/gifting"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  Gifting
                </Link>
              </li>
              <li>
                <Link
                  to="/winter-special"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  Winter Special
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#3B2F2F] hover:text-[#C6A27E] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon
                  icon={FiMapPin}
                  className="w-5 h-5 text-[#C6A27E] mt-0.5 flex-shrink-0"
                />
                <span className="text-[#3B2F2F]">
                  123 Artisan Street
                  <br /> Craft District, CD 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon
                  icon={FiPhone}
                  className="w-5 h-5 text-[#C6A27E] flex-shrink-0"
                />
                <span className="text-[#3B2F2F]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon
                  icon={FiMail}
                  className="w-5 h-5 text-[#C6A27E] flex-shrink-0"
                />
                <span className="text-[#3B2F2F]">hello@sharoma.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon
                  icon={FiMessageSquare}
                  className="w-5 h-5 text-[#C6A27E] flex-shrink-0"
                />
                <span className="text-[#3B2F2F]">+91-977-9880-180</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3B2F2F]/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#3B2F2F] text-sm">
            © 2024 Sharoma Candles. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-[#3B2F2F] hover:text-[#C6A27E] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#3B2F2F] hover:text-[#C6A27E] text-sm transition-colors"
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