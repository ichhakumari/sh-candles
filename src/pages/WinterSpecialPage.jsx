import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Section from '../components/ui/Section';
import Grid from '../components/ui/Grid';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import {getProductsByCategory} from '../data/products';

const WinterSpecialPage = () => {
  const winterProducts = getProductsByCategory('winter-special');

  const seasonalHighlights = [
    {
      title: "Cozy Evenings",
      description: "Warm scents that create a perfect atmosphere for cold winter nights",
      icon: "❄️",
      scents: ["Spiced Cinnamon", "Warm Vanilla", "Cedarwood"]
    },
    {
      title: "Holiday Magic",
      description: "Festive fragrances that bring joy and celebration to your home",
      icon: "🎄",
      scents: ["Peppermint Twist", "Pine Forest", "Winter Berry"]
    },
    {
      title: "Serenity & Reflection",
      description: "Calming aromas for peaceful winter meditation and relaxation",
      icon: "🕯️",
      scents: ["White Sage", "Lavender Snow", "Eucalyptus Mist"]
    }
  ];

  const winterFeatures = [
    {
      title: "Extended Burn Time",
      description: "Our winter candles are crafted to burn 20% longer, perfect for those long winter nights",
      icon: "⏰"
    },
    {
      title: "Premium Wax Blend",
      description: "Special winter wax formula with added coconut wax for cleaner, warmer burn",
      icon: "🌟"
    },
    {
      title: "Limited Edition",
      description: "Available only during winter months - collect these exclusive scents",
      icon: "✨"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent("Hello! I'm interested in your Winter Special collection. Can you help me choose the perfect winter scents?");
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
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src='/asserts/img/banner/4.png' 
          alt="Winter Special Collection" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold text-white mb-6">
              Winter Special Collection
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Embrace the magic of winter with our exclusive seasonal scents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection/winter-special">
                <Button variant="secondary" size="lg">
                  Order Winter Scents
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
                WhatsApp Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <Section background="white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Winter Mood Collection
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Each scent is carefully crafted to capture the essence of winter's most cherished moments
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonalHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 rounded-lg bg-ivory/50 hover:bg-ivory transition-colors"
            >
              <div className="text-5xl mb-6">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {highlight.title}
              </h3>
              <p className="text-warm-grey mb-4 leading-relaxed">
                {highlight.description}
              </p>
              <div className="space-y-1">
                {highlight.scents.map(scent => (
                  <p key={scent} className="text-sm text-gold font-medium">
                    {scent}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Winter Products */}
      <Section>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Featured Winter Scents
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto">
            Our most popular winter fragrances, loved for their ability to transform any space
          </p>
        </motion.div>
        {winterProducts.length > 0 ? (
          <Grid cols={4}>
            {winterProducts.map((product, index) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-warm-grey text-lg mb-4">
              Winter products are coming soon! Check back for our special holiday collection.
            </p>
            <Link to="/shop">
              <Button variant="outline">Browse All Products</Button>
            </Link>
          </div>
        )}
      </Section>

      {/* Winter Features */}
      <Section background="charcoal">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-white mb-4">
            What Makes Our Winter Special
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Exclusive features that make our winter collection truly special
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winterFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Winter Care Tips */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
              Winter Candle Care Tips
            </h2>
            <p className="text-warm-grey max-w-2xl mx-auto">
              Make your winter candles last longer with these simple tips
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-charcoal font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Trim Wick</h3>
                  <p className="text-warm-grey text-sm">
                    Always trim your wick to 1/4 inch before each burn for a cleaner, longer-lasting flame
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-charcoal font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">First Burn Matters</h3>
                  <p className="text-warm-grey text-sm">
                    Allow wax to melt to edges of container on first use to prevent tunneling
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-charcoal font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Store Properly</h3>
                  <p className="text-warm-grey text-sm">
                    Keep candles in a cool, dry place away from direct sunlight to preserve fragrance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-charcoal font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Burn Time</h3>
                  <p className="text-warm-grey text-sm">
                    Limit burn time to 4 hours at a time to extend the life of your winter candle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="ivory">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-6">
            Bring Winter Magic Home
          </h2>
          <p className="text-warm-grey max-w-2xl mx-auto mb-8 leading-relaxed">
            Transform your space into a winter wonderland with our exclusive collection of seasonal scents. Limited quantities available - order now before they're gone!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collection/winter-special">
              <Button variant="primary" size="lg">
                Order Winter Collection
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
              WhatsApp Help
            </Button>
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default WinterSpecialPage;