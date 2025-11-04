import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import Section from '../components/ui/Section';

const { FiMail, FiPhone, FiMapPin, FiClock, FiMessageSquare, FiExternalLink } = FiIcons;
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
      className="pt-16 lg:pt-32"
    >
      {/* Map Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
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
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
              <p className="text-warm-grey">Loading map...</p>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <Section background="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Reach Us */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-8">
              Reach Us
            </h2>
            
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={handleEmailClick}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                  <p className="text-charcoal hover:text-gold transition-colors">
                    sharomacandles.shop@gmail.com
                  </p>
                  <p className="text-sm text-warm-grey mt-1">Click to send us an email</p>
                </div>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4 text-warm-grey ml-auto" />
              </div>
            </motion.div>

            {/* WhatsApp/Phone */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">WhatsApp / Phone</h3>
                  <p className="text-charcoal hover:text-green-600 transition-colors">
                    +91-977-9880-180
                  </p>
                  <p className="text-sm text-warm-grey mt-1">Click to start WhatsApp chat</p>
                </div>
                <SafeIcon icon={FiExternalLink} className="w-4 h-4 text-warm-grey ml-auto" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-8">
              Contact Information
            </h2>

            {/* Location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Location Store</h3>
                  <p className="text-warm-grey leading-relaxed">
                    268 St, South New York<br />
                    NY 98944, United States
                  </p>
                </div>
              </div>
            </div>

            {/* Work Time */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Work Time</h3>
                  <div className="space-y-1 text-warm-grey">
                    <p>Monday – Friday: <span className="font-medium text-charcoal">9:00 – 20:00</span></p>
                    <p>Saturday: <span className="font-medium text-charcoal">11:00 – 15:00</span></p>
                    <p>Sunday: <span className="font-medium text-charcoal">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Phone Number</h3>
                  <div className="space-y-1 text-warm-grey">
                    <p>+91 779 988 0180</p>
                    <p>(+100) 666-456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Email Address</h3>
                  <div className="space-y-1 text-warm-grey">
                    <p>sharomacandles.shop@gmail.com</p>
                    <p>aloshopify@alothemes.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Accounts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-charcoal mb-4">Social Accounts</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-warm-grey transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={social.label}
                  >
                    <SafeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quick Contact CTA */}
      <Section background="charcoal">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-6">
            Need Quick Assistance?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
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
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default ContactPage;