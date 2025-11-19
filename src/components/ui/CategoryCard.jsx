import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, link, image }) => {
  return (
    <motion.div
      className="relative overflow-hidden group h-96 rounded-lg"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={link} className="block w-full h-full">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute bottom-4 right-4">
          <h3
            className="text-white text-lg font-semibold tracking-wider"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;