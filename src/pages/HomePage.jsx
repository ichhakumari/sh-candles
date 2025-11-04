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
import { getFeaturedProducts, getBestSellers, getTopDeals, getProductsByCategory } from '../data/products';

const { FiChevronLeft, FiChevronRight } = FiIcons;
const { FaPrayingHands } = FaIcons;

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestSellers = getBestSellers();
  const topDeals = getTopDeals().slice(0, 8);
  
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
      image: "/asserts/img/11.png",
      category: "spiritual"
    },
    {
      title: "Gifting Made Glowing",
      subtitle: "Perfect Presents for Every Occasion",
      cta: "Explore Now",
      link: "/collection/gifting",
      image: "/asserts/img/gift.png",
      category: "gifting"
    },
    {
      title: "Trending Candles",
      subtitle: "Our Most Popular Scents Right Now",
      cta: "Explore Now",
      link: "/collection/trending",
      image: "/asserts/img/11.png",
      category: "trending"
    },
    {
      title: "Winter Special Collection",
      subtitle: "Cozy Scents for Cold Winter Nights",
      cta: "Explore Now",
      link: "/collection/winter-special",
      image: "/asserts/img/gift.png",
      category: "winter"
    },
    {
      title: "Summer Special Collection",
      subtitle: "Refreshing Scents for Warm Days",
      cta: "Explore Now",
      link: "/collection/summer-special",
      image: "/asserts/img/banner/2.png",
      category: "summer"
    }
  ];
  
  const categories = [
    { title: 'Jai Guruji', link: '/collection/jai-guruji', image: '/asserts/img/product/Gift.png' },
    { title: 'Gifting Candles', link: '/collection/gifting', image: '/asserts/img/product/Trending.png' },
    { title: 'Summer Special', link: '/collection/summer-special', image: '/asserts/img/product/Luxirus.png' },
    { title: 'Winter Special', link: '/collection/winter-special', image: '/asserts/img/product/Trending2.png' }
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
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <AnimatePresence initial={false} custom={currentSlide > 0 ? 1 : -1}>
          <motion.div
            key={currentSlide}
            custom={currentSlide > 0 ? 1 : -1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            key={heroSlides[currentSlide].title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-white mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={heroSlides[currentSlide].link}>
                <Button variant="secondary" size="lg">
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppCTA}
                className="text-white border-white hover:bg-white hover:text-charcoal"
              >
                Order on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
        
        <button
          onClick={() => handleSlideChange('prev')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => handleSlideChange('next')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
        </button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F] mb-4">
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
      
      {/* We Promise Section */}
      <PromiseSection />
      
      {/* Top Trending Products */}
      <Section background="trending">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F]">
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
      <Section background="charcoal">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-6">
            Order Directly on WhatsApp
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Skip the checkout process! Connect with us directly on WhatsApp for personalized service,
            exclusive offers, and quick order processing.
          </p>
          <Button variant="secondary" size="lg" onClick={handleWhatsAppCTA}>
            Start Chat on WhatsApp
          </Button>
        </motion.div>
      </Section>
      
      {/* Jai Guruji Feature Block */}
      <Section background="message">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src='/asserts/img/guruji.png'
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
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F]">
              Jai Guruji Sacred Collection
            </h2>
            <p className="text-[#6E5A4A] leading-relaxed">
              Immerse yourself in the divine essence of our Jai Guruji collection. Each candle is thoughtfully
              crafted with sacred ingredients like sandalwood, frankincense, and rose, creating an atmosphere
              perfect for meditation, prayer, and spiritual reflection.
            </p>
            <ul className="space-y-2 text-[#6E5A4A]">
              <li>• Hand-poured with premium natural wax</li>
              <li>• Infused with authentic essential oils</li>
              <li>• 50-60 hour burn time</li>
              <li>• Perfect for meditation and spiritual practices</li>
            </ul>
            <br></br>
            <Link to="/collection/jai-guruji">
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
      
      {/* Best Sellers */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F] mb-4">
            Order Our Best Sellers
          </h2>
          <p className="text-[#6E5A4A] max-w-2xl mx-auto">
            Experience our premium candles
          </p>
        </motion.div>
        
        <BestSellerSlider products={bestSellers} />
      </Section>
      
      {/* Top Deals */}
      <Section background="trending">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 gap-4"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F]">
            Top Deals Of The Day
          </h2>
          <CountdownTimer targetDate={offerEndDate} />
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
      
      {/* Testimonials */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-[#3B2F2F] mb-4">
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