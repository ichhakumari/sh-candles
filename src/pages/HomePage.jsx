import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';
import Section from '../components/ui/Section';
import Grid from '../components/ui/Grid';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import BestSellerSlider from '../components/ui/BestSellerSlider';
import CountdownTimer from '../components/ui/CountdownTimer';
import CategoryCard from '../components/ui/CategoryCard';
import PromiseSection from '../components/ui/PromiseSection';
import WhatsAppOrderIllustration from "../components/ui/WhatsAppOrderIllustration";

import { getFeaturedProducts, getWinterSpecialProducts, getBestSellers, getTopDeals, getProductsByCategory } from '../data/products';

const { FiChevronLeft, FiChevronRight } = FiIcons;
const { FaPrayingHands } = FaIcons;

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestSellers = getBestSellers();
  const topDeals = getTopDeals().slice(0, 8);
  const winterProducts = getWinterSpecialProducts().slice(0, 8);

  const offerEndDate = new Date();
  offerEndDate.setHours(offerEndDate.getHours() + 11);
  offerEndDate.setMinutes(offerEndDate.getMinutes() + 41);
  offerEndDate.setSeconds(offerEndDate.getSeconds() + 24);

  const heroSlides = [
    {
      title: "Jai Guruji Sacred Candles",
      subtitle: "Divine Fragrances for Spiritual Moments",
      cta: "Explore Collection",
      link: "/collection/jai-guruji",
      image: "/banner1.jpeg",
      category: "spiritual"
    },
    {
      title: "Gifting Made Glowing",
      subtitle: "Perfect Presents for Every Occasion",
      cta: "Explore Now",
      link: "/collection/gifting",
      image: "/banner2.jpeg",
      category: "gifting"
    },
    {
      title: "Trending Candles",
      subtitle: "Our Most Popular Scents Right Now",
      cta: "Explore Now",
      link: "/collection/trending",
      image: "/banner1.jpeg",
      category: "trending"
    },
    {
      title: "Winter Special Collection",
      subtitle: "Cozy Scents for Cold Winter Nights",
      cta: "Explore Now",
      link: "/collection/winter-special",
      image: "/banner2.jpeg",
      category: "winter-special"
    },
    {
      title: "Summer Special Collection",
      subtitle: "Refreshing Scents for Warm Days",
      cta: "Explore Now",
      link: "/collection/summer-special",
      image: "/banner5.png",
      category: "summer"
    }
  ];

  const categories = [
    { title: 'Jai Guruji', link: '/collection/jai-guruji', image: '/guruji/GurujiBirthday2.png' },
    { title: 'Winter Special', link: '/collection/winter-special', image: '/asserts/img/product/Trending2.png' },
    { title: 'Gifting Candles', link: '/collection/gifting', image: '/gift/JarofRoses_.png' },
    { title: 'Summer Special', link: '/collection/summer-special', image: '/summer/SweetHearts.png' }
  ];

  const testimonials = [
    { name: "Sarah Chen", text: "The Jai Guruji candles have transformed my meditation practice. The scents are divine.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
    { name: "Michael Rodriguez", text: "Exceptional quality and beautiful packaging. The WhatsApp ordering is so convenient!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
    { name: "Emily Johnson", text: "The Winter Special collection brings such warmth and coziness to my home during the holidays.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleWhatsAppCTA = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent("Hello! I'd like to inquire about your candle collection.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 lg:pt-32">
      {/* Hero Carousel */}
      <section className="relative h-[65vh] min-h-[500px] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh] max-h-screen overflow-hidden">
        {/* Background Image Layer - z-0 */}
        <AnimatePresence initial={false} custom={currentSlide > 0 ? 1 : -1}>
          <motion.div
            key={currentSlide}
            custom={currentSlide > 0 ? 1 : -1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay Layer - z-10 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10 pointer-events-none" />

        {/* Content Layer - z-20 */}
        {/* <div className="relative h-full flex items-center justify-center text-center px-3 sm:px-6 lg:px-8 z-20">
          <motion.div
            key={heroSlides[currentSlide].title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-5xl mx-auto w-full"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 drop-shadow-lg">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-3 sm:px-4">
              <Link to={heroSlides[currentSlide].link} className="w-full sm:w-auto max-w-xs sm:max-w-none">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px] shadow-lg">
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppCTA}
                className="text-white border-2 border-white hover:bg-white hover:text-charcoal w-full sm:w-auto max-w-xs sm:max-w-none min-w-[200px] shadow-lg"
              >
                Order on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div> */}

        {/* Navigation Controls - z-30 */}
        <button
          onClick={() => handleSlideChange('prev')}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/40 active:bg-white/50 transition-all duration-300 z-30 touch-manipulation shadow-lg"
          aria-label="Previous slide"
        >
          <SafeIcon icon={FiChevronLeft} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={() => handleSlideChange('next')}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/40 active:bg-white/50 transition-all duration-300 z-30 touch-manipulation shadow-lg"
          aria-label="Next slide"
        >
          <SafeIcon icon={FiChevronRight} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 touch-manipulation shadow-md ${currentSlide === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Category Grid Section */}
      <Section background="gifting" padding="default">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide mb-4">
            Explore Our Categories
          </h2>
          <p className="text-[#6E5A4A] max-w-2xl mx-auto">
            From sacred scents to seasonal specials, discover the perfect candle for every mood and occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              link={category.link}
              image={category.image}
            />
          ))}
        </div>
      </Section>

      {/* Winter Special */}

      <Section background="winter-special">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-12 gap-4"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide text-center">
            Explore Winter SpecialCollection
          </h2>
        </motion.div>



        <div className="mb-8">
          <Grid cols={4}>
            {winterProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Grid>
        </div>

        <div>
          <Grid cols={4}>
            {winterProducts.slice(4, 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Grid>
        </div>
      </Section>



      {/* Best Sellers */}
      <Section background="gifting">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide mb-4">
            Order Our Best Sellers
          </h2>
          <p className="text-[#6E5A4A] max-w-2xl mx-auto">
            Experience our premium candles
          </p>
        </motion.div>

        <BestSellerSlider products={bestSellers} />
      </Section>

      {/* Jai Guruji Feature Block */}
      <Section background="winter-special">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src='/guru.png'
              alt="Jai Guruji Collection"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide">
              Jai Guruji Sacred Collection
            </h2>
            <p className="text-[#6E5A4A] leading-relaxed">
              Immerse yourself in the divine essence of our Jai Guruji collection. Each candle is thoughtfully
              crafted with sacred ingredients like sandalwood, frankincense, and rose, creating an atmosphere
              perfect for meditation, prayer, and spiritual reflection.
            </p>
            <ul className="space-y-2 text-[#6E5A4A]">
              <li>✓ Hand-poured with premium natural wax</li>
              <li>✓ Infused with authentic essential oils</li>
              <li>✓ 50-60 hour burn time</li>
              <li>✓ Perfect for meditation and spiritual practices</li>
            </ul>
            <br></br>
            <Link to="/collection/jai-guruji">
              <Button variant="secondary" size="lg">
                Explore Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>



      {/* Top Trending Products */}
      <Section background="trending">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide">
            Top Trending
          </h2>
          <Link
            to="/shop"
            className="absolute top-1/2 right-0 -translate-y-1/2 text-[#3B2F2F] hover:text-[#C6A27E] font-medium transition-colors hidden md:flex items-center group"
          >
            <span>View All Products</span>
            <SafeIcon
              icon={FiChevronRight}
              className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        <Grid cols={4}>
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </Grid>
      </Section>

      {/* WhatsApp CTA Section */}

      <Section background="bg-green-50" padding="2px">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center px-3 sm:px-6 lg:px-10 py-8"
        >
          {/* Left Side - Illustration (responsive scale, aspect, alignment) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-2 md:order-1 w-full flex justify-center items-center mb-8 md:mb-0"
          >
            <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] aspect-square">
              <WhatsAppOrderIllustration />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Order Directly on{' '}
              <span className="text-green-600 block mt-2">WhatsApp</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              Skip the checkout hassle! Chat with us for quick{' '}
              <span className="font-semibold text-green-700">candle orders</span>,{' '}
              <span className="font-semibold text-green-700">custom scents</span>, or{' '}
              <span className="font-semibold text-green-700">gift sets</span> — all made from{' '}
              <span className="font-semibold text-green-700">eco-friendly soy wax</span> and{' '}
              <span className="font-semibold text-green-700">100% vegan ingredients</span>.
            </p>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              ✨ Enjoy <span className="font-semibold text-green-700">personalized recommendations</span>,{' '}
              <span className="font-semibold text-green-700">exclusive offers</span>, and{' '}
              <span className="font-semibold text-green-700">fast responses</span> — all in one chat.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleWhatsAppCTA}
              className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
            >
              Start Chat on WhatsApp
            </Button>
            <p className="text-sm text-gray-600 mt-6">
              💬 Real-time support • 🌱 Vegan & cruelty-free • 🎁 Custom-made for you
            </p>
          </motion.div>
        </motion.div>
      </Section>




      {/* Top Deals */}
      <Section background="trending">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center mb-12 gap-4"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide text-center">
            Top Deals Of The Day
          </h2>
        </motion.div>



        <div className="mb-8">
          <Grid cols={4}>
            {topDeals.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Grid>
        </div>

        <div>
          <Grid cols={4}>
            {topDeals.slice(4, 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Grid>
        </div>
      </Section>

      {/* We Promise Section */}
      <PromiseSection />

      {/* Testimonials */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#3B2F2F] tracking-wide mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#6E5A4A] max-w-2xl mx-auto">
            Hear from our community of candle lovers who have transformed their spaces with Sharoma.
          </p>
        </motion.div>

        <Grid cols={3}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-[#6E5A4A] italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-medium text-[#3B2F2F]">{testimonial.name}</h4>
            </motion.div>
          ))}
        </Grid>
      </Section>
    </motion.div>
  );
};

export default HomePage;