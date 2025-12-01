import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const AboutPage = () => {
  const values = [
    {
      title: "Premium Quality",
      description: "We use only the finest natural waxes and premium fragrance oils to create candles that burn cleanly and evenly.",
      image: "/asserts/img/12.png"
    },
    {
      title: "Artisan Crafted",
      description: "Each candle is hand-poured with meticulous attention to detail, ensuring every piece meets our exacting standards.",
      image: "/asserts/img/12.png"
    },
    {
      title: "Sustainable Practices",
      description: "We're committed to environmental responsibility, using eco-friendly materials and sustainable packaging.",
      image: "/asserts/img/12.png"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "New York, NY",
      text: "The Jai Guruji candles have transformed my meditation practice. The scents are divine.",
      image: "/profile-icon4.jpg"
    },

    {
      name: "Emily Johnson",
      location: "Austin, TX",
      text: "The Winter Special collection brings such warmth and coziness to my home during the holidays.",
      image: "/profile-icon3.jpg"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      text: "The fragrance quality is outstanding! These candles create such a peaceful ambiance in my home.",
      image: "/profile-icon2.jpg"
    },
    {
      name: "David Wilson",
      location: "London, UK",
      text: "Best candles I've ever purchased! The burn time is incredible and the scents are not overpowering.",
      image: "/profile-icon1.jpg"
    },
    {
      name: "Sophie Laurent",
      location: "Paris, France",
      text: "Absolutely love the elegant packaging and premium quality. These make perfect gifts!",
      image: "/profile-icon5.jpg"
    },
    {
      name: "Michael Rodriguez",
      location: "San Francisco, CA",
      text: "Exceptional quality and beautiful packaging. The WhatsApp ordering is so convenient!",
      image: "/profile-icon.jpg"
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Master Chandler",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "With over 15 years of experience in fragrance design, Sarah founded Sharoma to bring luxury candles to everyday spaces."
    },
    {
      name: "David Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "David ensures every candle meets our quality standards and oversees our sustainable production processes."
    },
    {
      name: "Maria Rodriguez",
      role: "Fragrance Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Maria develops our signature scent profiles, blending traditional techniques with innovative fragrance combinations."
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent("Hello! I'd like to know more about Sharoma candles and your story.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-32"
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src="/asserts/img/11.png"
          alt="About Sharoma"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-medium tracking-wide text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Crafting premium candles that transform spaces into sanctuaries of calm and luxury
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-wide text-charcoal">
              Born from Passion
            </h2>
            <p className="text-warm-grey leading-relaxed">
              Sharoma began as a simple dream to create candles that do more than just provide light and fragrance. We wanted to craft experiences—moments of tranquility, connection, and joy that transform ordinary spaces into extraordinary sanctuaries.
            </p>
            <p className="text-warm-grey leading-relaxed">
              Founded in 2019, our journey started in a small workshop where every candle was hand-poured with love and attention to detail. Today, we continue that same artisanal approach, ensuring each Sharoma candle meets our exacting standards for quality, beauty, and performance.
            </p>
            <p className="text-warm-grey leading-relaxed">
              From our sacred Jai Guruji collection to our refreshing Summer Specials, every candle tells a story and creates an atmosphere that speaks to the soul.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/guru.png"
              alt="Candle making process"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-wide text-charcoal mb-4">
            Our Values
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Every aspect of our business is guided by these core principles that define who we are.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {value.title}
              </h3>
              <p className="text-warm-grey leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Reviews Section */}
      <Section background="ivory">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-wide text-charcoal mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Discover why candle lovers around the world choose Sharoma to illuminate their homes and hearts.
          </p>
        </motion.div>
        <TestimonialSlider testimonials={testimonials} />
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-medium tracking-wide text-black mb-6">
            Experience The Sharoma Difference
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join Thousands of Customers Who Have Transformed Their Spaces with Our Premium Candles. Discover Your Perfect Scent Today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="secondary" size="lg">
                Order Our Collection
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white border-none"
            >
              WhatsApp Support
            </Button>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default AboutPage;