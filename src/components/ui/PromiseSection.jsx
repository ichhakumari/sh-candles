import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {
  FiHeart,
  FiStar,
  FiDroplet,
  FiFeather,
  FiAward
} = FiIcons;

const promises = [
  {
    title: 'Paraffin Free',
    image: '/asserts/frag.jpg',
    icon: FiHeart
  },
  {
    title: 'Premium Ingredients',
    image: '/asserts/premium.jpg',
    icon: FiStar
  },
  {
    title: 'Fragrance',
    image: '/asserts/frag.jpg',
    icon: FiDroplet
  },
  {
    title: '100% Vegan',
    image: '/asserts/vegan.jpg',
    icon: FiFeather
  },
  {
    title: 'Certified',
    image: '/asserts/premium.jpg',
    icon: FiAward
  }
];

const PromiseSection = () => {
  return (
    <Section background="promise" padding="lg" className="py-6 lg:py-14">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F] mb-3">
          We Promise
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#6E5A4A] italic mb-6 px-4">
            "At Sharoma, our promise is simple — to craft candles that don't just light a room,
            but elevate the soul. Each creation reflects our devotion to purity, beauty, and the
            quiet luxury of mindful living."
          </p>
          <p className="text-[#3B2F2F] font-medium">
            — With warmth,<br />
            <span className="text-[#C6A27E]">The Founder & CEO, Sharoma</span>
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 lg:gap-x-6 text-center justify-items-center">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
            aria-label={promise.title}
          >
            <div className="w-28 h-28 bg-ivory rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 overflow-hidden shadow-sm">
              <img
                src={promise.image}
                alt={promise.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <SafeIcon
                icon={promise.icon}
                className="w-5 h-5 text-[#C6A27E] flex-shrink-0"
              />
              <h3 className="font-medium text-[#3B2F2F] tracking-wide">
                {promise.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PromiseSection;