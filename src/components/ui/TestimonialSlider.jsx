import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronLeft, FiChevronRight, FiStar } = FiIcons;

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

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col items-center text-center mx-1 sm:mx-2">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-ivory shadow-md">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="flex text-gold mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            ))}
        </div>
        <p className="text-sm sm:text-base text-warm-grey italic mb-4 sm:mb-6 flex-grow leading-relaxed">
            "{testimonial.text}"
        </p>
        <div>
            <h4 className="font-serif font-medium text-charcoal text-base sm:text-lg">{testimonial.name}</h4>
            <p className="text-xs sm:text-sm text-gold uppercase tracking-wider mt-1">{testimonial.location}</p>
        </div>
    </div>
);

const TestimonialSlider = ({ testimonials }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const getItemsPerPage = () => {
            if (window.innerWidth >= 1024) return 3;
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

    const pageCount = testimonials ? Math.ceil(testimonials.length / itemsPerPage) : 0;

    const paginate = (newDirection) => {
        setPage([(page + newDirection + pageCount) % pageCount, newDirection]);
    };

    const goToPage = (pageNum) => {
        setPage([pageNum, pageNum > page ? 1 : -1]);
    };

    const visibleTestimonials = testimonials ? testimonials.slice(
        page * itemsPerPage,
        (page * itemsPerPage) + itemsPerPage
    ) : [];

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <div className="relative px-2 sm:px-4 lg:px-12">
            <div className="overflow-hidden relative h-[400px] sm:h-[450px] md:h-[480px]">
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
                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full`}>
                            {visibleTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={`${page}-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {pageCount > 1 && (
                <>
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute top-1/2 -left-1 sm:left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10 text-charcoal hover:text-gold"
                        aria-label="Previous slide"
                    >
                        <SafeIcon icon={FiChevronLeft} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute top-1/2 -right-1 sm:right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10 text-charcoal hover:text-gold"
                        aria-label="Next slide"
                    >
                        <SafeIcon icon={FiChevronRight} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <div className="flex justify-center mt-4 sm:mt-2 space-x-2">
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${page === index
                                    ? 'bg-gold w-6 sm:w-8'
                                    : 'w-2 bg-warm-grey/30 hover:bg-warm-grey/50'
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

export default TestimonialSlider;
