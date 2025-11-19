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
    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col items-center text-center mx-2">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-ivory shadow-sm">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="flex text-gold mb-4">
            {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
            ))}
        </div>
        <p className="text-warm-grey italic mb-6 flex-grow leading-relaxed">
            "{testimonial.text}"
        </p>
        <div>
            <h4 className="font-serif font-medium text-charcoal text-lg">{testimonial.name}</h4>
            <p className="text-sm text-gold uppercase tracking-wider mt-1">{testimonial.location}</p>
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

    // Handle case where last page has fewer items than itemsPerPage
    // We might want to wrap around or just show what's left. 
    // The slice method handles the end index being out of bounds gracefully.

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <div className="relative px-4 lg:px-12">
            <div className="overflow-hidden relative h-[450px]">
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
                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full`}>
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
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10 text-charcoal hover:text-gold"
                        aria-label="Previous slide"
                    >
                        <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center hover:bg-ivory transition-colors z-10 text-charcoal hover:text-gold"
                        aria-label="Next slide"
                    >
                        <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                    </button>
                    <div className="flex justify-center mt-2 space-x-2">
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${page === index
                                        ? 'bg-gold w-8'
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
