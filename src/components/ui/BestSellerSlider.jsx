import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import BestSellerProductCard from './BestSellerProductCard';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const BestSellerSlider = ({ products }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const getItemsPerPage = () => {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
      return 1;
    };

    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageCount = products ? Math.ceil(products.length / itemsPerPage) : 0;

  const paginate = (newDirection) => {
    setPage([(page + newDirection + pageCount) % pageCount, newDirection]);
  };

  const goToPage = (pageNum) => {
    setPage([pageNum, pageNum > page ? 1 : -1]);
  }

  const visibleProducts = products ? products.slice(
    page * itemsPerPage,
    (page * itemsPerPage) + itemsPerPage
  ) : [];

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative h-[550px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full`}>
              {visibleProducts.map((product) => (
                <BestSellerProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {pageCount > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10"
            aria-label="Previous slide"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-charcoal" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10"
            aria-label="Next slide"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-charcoal" />
          </button>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  page === index 
                    ? 'bg-gold w-6' 
                    : 'w-3 bg-warm-grey/40 hover:bg-warm-grey/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BestSellerSlider;