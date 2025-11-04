import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Section from '../components/ui/Section';
import Grid from '../components/ui/Grid';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import {getProductsByCategory} from '../data/products';

const GiftingPage = () => {
  const giftingProducts = getProductsByCategory('gifting');

  const giftGuides = [
    {
      title: "For Her",
      description: "Elegant florals and sophisticated scents",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      scents: ["Lavender Dreams", "Rose Garden", "Vanilla Bourbon"]
    },
    {
      title: "For Him",
      description: "Bold, masculine fragrances",
      image: "https://images.unsplash.com/photo-1602874801006-af7add90a439?w=400&h=300&fit=crop",
      scents: ["Cedar & Sage", "Bourbon Oak", "Fresh Citrus"]
    },
    {
      title: "For Home",
      description: "Welcoming scents for every space",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      scents: ["Clean Linen", "Ocean Breeze", "Warm Vanilla"]
    }
  ];

  const occasions = [
    {
      title: "Birthdays",
      description: "Make their special day glow brighter",
      icon: "🎂"
    },
    {
      title: "Anniversaries",
      description: "Celebrate love with romantic scents",
      icon: "💕"
    },
    {
      title: "Housewarming",
      description: "Help them make their house a home",
      icon: "🏠"
    },
    {
      title: "Holidays",
      description: "Seasonal scents for festive moments",
      icon: "🎄"
    },
    {
      title: "Thank You",
      description: "Show appreciation with thoughtful gifts",
      icon: "🙏"
    },
    {
      title: "Just Because",
      description: "Surprise someone special for no reason",
      icon: "✨"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent("Hello! I'm looking for gift recommendations. Can you help me choose the perfect candle?");
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
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=600&fit=crop" 
          alt="Gifting Collection" 
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
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-white mb-6">
              Gifting Made Glowing
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Thoughtfully curated candles perfect for every occasion and every person you care about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection/gifting">
                <Button variant="secondary" size="lg">
                  Order Gift Collection
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
                Get Gift Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gift Guides Section */}
      <Section>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Gift Guides
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Find the perfect candle for everyone on your list with our curated gift recommendations.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {giftGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {guide.title}
                </h3>
                <p className="text-warm-grey mb-4">
                  {guide.description}
                </p>
                <div className="space-y-1 mb-4">
                  {guide.scents.map(scent => (
                    <p key={scent} className="text-sm text-warm-grey">
                      • {scent}
                    </p>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Order {guide.title}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Occasions Section */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Perfect for Every Occasion
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Whether you're celebrating a milestone or just want to brighten someone's day, we have the perfect candle.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:bg-ivory/50 transition-colors"
            >
              <div className="text-4xl mb-4">{occasion.icon}</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                {occasion.title}
              </h3>
              <p className="text-warm-grey text-sm">
                {occasion.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gift Sets Section */}
      <Section>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Curated Gift Sets
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Beautifully packaged collections that make gift-giving effortless and memorable.
          </p>
        </motion.div>
        <Grid cols={4}>
          {giftingProducts.map((product, index) => (
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

      {/* Why Choose Our Gifts Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1602874801006-af7add90a439?w=600&h=400&fit=crop" 
              alt="Gift packaging" 
              className="w-full h-96 object-cover rounded-lg shadow-lg" 
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal">
              Why Choose Sharoma for Gifts?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Beautiful Packaging</h3>
                  <p className="text-warm-grey">Each candle comes in elegant packaging that's ready to gift.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Personal Touch</h3>
                  <p className="text-warm-grey">Add a personal message with our complimentary gift notes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Premium Quality</h3>
                  <p className="text-warm-grey">Every candle is crafted with the finest materials and attention to detail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Fast Shipping</h3>
                  <p className="text-warm-grey">Free shipping on orders over $50, with expedited options available.</p>
                </div>
              </div>
            </div>
            <Link to="/collection/gifting">
              <Button variant="primary" size="lg">
                Order Gift Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="charcoal">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our gift specialists are here to help you find the perfect candle for any occasion. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Gift Advice
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
              WhatsApp Gift Help
            </Button>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default GiftingPage;