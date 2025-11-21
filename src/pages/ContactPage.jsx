import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import Section from '../components/ui/Section';

const { FiMail, FiPhone, FiMapPin, FiClock, FiMessageSquare, FiExternalLink, FiArrowUpRight } = FiIcons;
const { FaFacebook, FaTwitter, FaPinterest, FaTiktok } = FaIcons;
const { SiTumblrc } = SiIcons;

const ContactPage = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent("Hello! I'd like to inquire about your products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:sharomacandles.shop@gmail.com', '_blank');
  };

  const handleDirectionsClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=268+St,+South+New+York,+NY+98944', '_blank');
  };

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaTwitter, url: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaPinterest, url: '#', label: 'Pinterest', color: 'hover:text-red-600' },
    { icon: SiTumblrc, url: '#', label: 'Tumblr', color: 'hover:text-blue-500' },
    { icon: FaTiktok, url: '#', label: 'TikTok', color: 'hover:text-black' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 lg:pt-40"
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl lg:text-6xl font-serif font-medium tracking-wide text-charcoal mb-4">Contact Us</h1>
        <p className="text-warm-grey text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Visit our store or reach out to us directly.
        </p>
      </div>

      <Section background="ivory" className="!py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-8 mb-16 relative z-10 px-4 max-w-7xl mx-auto">

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
              <SafeIcon icon={FiMapPin} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal mb-4">Our Store</h3>
            <p className="text-warm-grey mb-8 flex-grow">
              268 St, South New York<br />
              NY 98944, United States
            </p>
            <button
              onClick={handleDirectionsClick}
              className="flex items-center space-x-2 text-gold font-medium hover:text-charcoal transition-colors group"
            >
              <span>Get Directions</span>
              <SafeIcon icon={FiArrowUpRight} className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
              <SafeIcon icon={FiPhone} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal mb-4">Contact Info</h3>
            <div className="text-warm-grey mb-8 flex-grow space-y-4">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                <p className="font-medium text-charcoal">+91 779 988 0180</p>
                <p className="font-medium text-charcoal">(+100) 666-456-7890</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <p className="font-medium text-charcoal">sharomacandles.shop@gmail.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.slice(0, 3).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-warm-grey hover:text-gold transition-colors`}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Opening Hours Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
              <SafeIcon icon={FiClock} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal mb-4">Opening Hours</h3>
            <div className="text-warm-grey mb-8 flex-grow space-y-2">
              <p><span className="font-medium text-charcoal">Mon – Fri:</span> 9:00 – 20:00</p>
              <p><span className="font-medium text-charcoal">Saturday:</span> 11:00 – 15:00</p>
              <p><span className="font-medium text-charcoal">Sunday:</span> Closed</p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Open Now
              </span>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* Map Section */}
      <section className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-100">
        {mapLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb4b4c7%3A0x4b5c5b5b5b5b5b5b!2s268%20St%2C%20South%20New%20York%2C%20NY%2098944!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sharoma Candles Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
          </div>
        )}
      </section>

      {/* Quick Assistance */}
      <Section background="white" className="py-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-wide text-charcoal mb-6">
            Need Quick Assistance?
          </h2>
          <p className="text-charcoal/80 text-lg mb-10 leading-relaxed">
            Reach out to us directly via WhatsApp for the fastest response. Our team is ready to help you with orders, product information, and any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default ContactPage;