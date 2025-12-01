import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronLeft, FiChevronRight, FiPlay, FiPause } = FiIcons;

// Best seller videos data - 5 videos linked to products
const bestSellerVideos = [
  {
    id: 1,
    videoUrl: '/videos/1.mp4',
    productId: 1,
    productName: 'Cinnamon & Orange Spice Candle',
    productPrice: '₹ 1199',
    thumbnail: ''

  },
  {
    id: 2,
    videoUrl: '/videos/3.mp4',
    productId: 9,
    productName: 'Vanilla Glow',
    productPrice: '₹1299.00',
    thumbnail: ''
  },
  {
    id: 3,
    videoUrl: '/videos/guruji.mp4',
    productId: 11,
    productName: 'Rose & Sandalwood Premium Candle',
    productPrice: '₹1599',
    thumbnail: ''
  },
  {
    id: 4,
    videoUrl: '/videos/premium lavender.mp4',
    productId: 16,
    productName: 'Summer Mango',
    productPrice: '₹1200.00',
    thumbnail: ''
  },
  {
    id: 5,
    videoUrl: '/videos/whiteladyjar.mp4',
    productId: 25,
    productName: 'Cozy Cabin',
    productPrice: '₹899.00',
    thumbnail: ''
  }
];

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

const BestSellerSlider = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [playingVideos, setPlayingVideos] = useState({});
  const [videosPerView, setVideosPerView] = useState(4);
  const videoRefs = useRef({});

  // Update videos per view based on screen size
  useEffect(() => {
    const updateVideosPerView = () => {
      if (window.innerWidth >= 1024) {
        setVideosPerView(4); // Desktop: 4 videos
      } else if (window.innerWidth >= 640) {
        setVideosPerView(2); // Tablet: 2 videos
      } else {
        setVideosPerView(1); // Mobile: 1 video
      }
    };

    updateVideosPerView();
    window.addEventListener('resize', updateVideosPerView);
    return () => window.removeEventListener('resize', updateVideosPerView);
  }, []);

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + bestSellerVideos.length) % bestSellerVideos.length;
    setCurrentIndex([newIndex, newDirection]);
  };

  const goToSlide = (index) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, newDirection]);
  };

  const toggleVideoPlay = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      if (playingVideos[videoId]) {
        videoElement.pause();
        setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
      } else {
        videoElement.play();
        setPlayingVideos(prev => ({ ...prev, [videoId]: true }));
      }
    }
  };

  // Get visible videos based on current videosPerView
  const getVisibleVideos = () => {
    const videos = [];
    for (let i = 0; i < videosPerView; i++) {
      const index = (currentIndex + i) % bestSellerVideos.length;
      videos.push(bestSellerVideos[index]);
    }
    return videos;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <div className="relative w-full">
      {/* Main Video Slider */}
      <div className="overflow-hidden relative h-[400px] sm:h-[500px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.5, ease: 'easeInOut' },
              opacity: { duration: 0.3 },
            }}
            className="absolute w-full h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 h-full px-1 sm:px-2">
              {visibleVideos.map((video, idx) => (
                <div key={`${video.id}-${idx}`} className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-gold/20">
                  {/* Video Element */}
                  <video
                    ref={(el) => videoRefs.current[`${video.id}-${idx}`] = el}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Play/Pause Button - Visible when paused */}
                  {!playingVideos[`${video.id}-${idx}`] && (
                    <button
                      onClick={() => toggleVideoPlay(`${video.id}-${idx}`)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gold/90 to-gold/70 hover:from-gold hover:to-gold/90 text-charcoal rounded-full p-3 sm:p-5 transition-all duration-300 z-10 shadow-xl hover:shadow-2xl hover:scale-110 backdrop-blur-sm border-2 border-white/20"
                      aria-label="Play video"
                    >
                      <SafeIcon
                        icon={FiPlay}
                        className="w-5 h-5 sm:w-7 sm:h-7"
                      />
                    </button>
                  )}

                  {/* Pause Button - Only visible when playing */}
                  {playingVideos[`${video.id}-${idx}`] && (
                    <button
                      onClick={() => toggleVideoPlay(`${video.id}-${idx}`)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gold/90 to-gold/70 hover:from-gold hover:to-gold/90 text-charcoal rounded-full p-3 sm:p-5 transition-all duration-300 z-10 shadow-xl hover:shadow-2xl hover:scale-110 backdrop-blur-sm border-2 border-white/20 opacity-0 hover:opacity-100"
                      aria-label="Pause video"
                    >
                      <SafeIcon
                        icon={FiPause}
                        className="w-5 h-5 sm:w-7 sm:h-7"
                      />
                    </button>
                  )}

                  {/* Product Info Overlay - Responsive text sizes */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white">
                    <h3 className="text-base sm:text-xl font-sans font-bold mb-1 sm:mb-2 line-clamp-2 drop-shadow-lg">{video.productName}</h3>
                    <p className="text-lg sm:text-2xl font-bold text-gold mb-2 sm:mb-3 drop-shadow-lg tracking-wide">{video.productPrice}</p>
                    <Link
                      to={`/product/${video.productId}`}
                      className="inline-block bg-gradient-to-r from-gold to-[#d4af6a] text-charcoal font-bold px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl hover:from-[#d4af6a] hover:to-gold transition-all duration-300 text-xs sm:text-sm w-full text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      View Product
                    </Link>
                  </div>

                  {/* Muted Badge - Responsive */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center space-x-1 sm:space-x-1.5 border border-white/10 shadow-lg">
                    <SafeIcon icon={FiIcons.FiVolumeX} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Muted</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Responsive */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 -left-3 sm:-left-5 transform -translate-y-1/2 bg-gradient-to-br from-white to-gray-50 hover:from-gold hover:to-[#d4af6a] rounded-full shadow-2xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 z-20 hover:scale-110 border-2 border-white/50 group"
        aria-label="Previous video"
      >
        <SafeIcon icon={FiChevronLeft} className="w-5 h-5 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 -right-3 sm:-right-5 transform -translate-y-1/2 bg-gradient-to-br from-white to-gray-50 hover:from-gold hover:to-[#d4af6a] rounded-full shadow-2xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 z-20 hover:scale-110 border-2 border-white/50 group"
        aria-label="Next video"
      >
        <SafeIcon icon={FiChevronRight} className="w-5 h-5 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors" />
      </button>

      {/* Progress Indicators - Responsive */}
      <div className="flex justify-center mt-4 sm:mt-8 space-x-2 sm:space-x-3">
        {Array.from({ length: Math.max(1, bestSellerVideos.length - videosPerView + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
              ? 'bg-gradient-to-r from-gold to-[#d4af6a] w-12 sm:w-16 shadow-lg shadow-gold/30'
              : 'w-2 sm:w-2.5 bg-warm-grey/30 hover:bg-warm-grey/50 hover:w-4 sm:hover:w-6'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSlider;