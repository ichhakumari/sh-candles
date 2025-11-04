import React, {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Section from '../components/ui/Section';
import Grid from '../components/ui/Grid';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import {getProductById, products} from '../data/products';

const {FiTruck, FiRefreshCw, FiShield, FiMessageSquare} = FiIcons;

const ProductPage = () => {
  const {id} = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="pt-16 lg:pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-charcoal mb-4">Product Not Found</h1>
          <p className="text-warm-grey mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button variant="primary">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image, product.image]; // Mock multiple images
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919779880180';
    const message = encodeURIComponent(`Hi! I'd like to order ${product.name}. Please let me know availability and pricing details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const tabs = [
    {id: 'description', label: 'Description'},
    {id: 'notes', label: 'Fragrance Notes'},
    {id: 'ingredients', label: 'Ingredients'},
    {id: 'shipping', label: 'Shipping'}
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-32"
    >
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              className="aspect-square overflow-hidden rounded-lg"
            >
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <motion.div
            initial={{x: 50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.2}}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                {product.rating && (
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${
                            i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-warm-grey">({product.rating})</span>
                  </div>
                )}
                <span className="text-warm-grey">•</span>
                <span className="text-warm-grey">{product.scent}</span>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-warm-grey line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-semibold text-charcoal">
                  ${product.price}
                </span>
                {product.discount && (
                  <span className="bg-gold text-charcoal px-2 py-1 rounded-full text-sm font-medium">
                    Save {product.discount}%
                  </span>
                )}
              </div>
            </div>

            <p className="text-warm-grey leading-relaxed">
              {product.description}
            </p>

            {/* Product Options */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Size</label>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gold bg-gold/10 text-charcoal rounded-lg">
                    {product.size}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button variant="primary" size="lg" className="w-full" onClick={handleWhatsAppClick}>
                Order on WhatsApp
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-warm-grey">
                <SafeIcon icon={FiTruck} className="w-5 h-5" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-warm-grey">
                <SafeIcon icon={FiRefreshCw} className="w-5 h-5" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-warm-grey">
                <SafeIcon icon={FiShield} className="w-5 h-5" />
                <span>Premium quality guarantee</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gold font-medium">
                <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
                <span>Order directly on WhatsApp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Product Details Tabs */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-warm-grey/20 mb-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-gold border-b-2 border-gold' 
                    : 'text-warm-grey hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-warm-grey leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-warm-grey leading-relaxed">
                  Our {product.name} is meticulously crafted using premium ingredients and traditional techniques. Each candle is hand-poured with care, ensuring consistent quality and an exceptional burn experience that will transform your space into a sanctuary of calm and luxury.
                </p>
              </div>
            )}

            {activeTab === 'notes' && product.notes && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Top Notes</h3>
                  <ul className="space-y-1">
                    {product.notes.top.map(note => (
                      <li key={note} className="text-warm-grey">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Middle Notes</h3>
                  <ul className="space-y-1">
                    {product.notes.middle.map(note => (
                      <li key={note} className="text-warm-grey">{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Base Notes</h3>
                  <ul className="space-y-1">
                    {product.notes.base.map(note => (
                      <li key={note} className="text-warm-grey">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="font-semibold text-charcoal mb-4">What's Inside</h3>
                <ul className="space-y-2">
                  {product.ingredients.map(ingredient => (
                    <li key={ingredient} className="text-warm-grey flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-ivory rounded-lg">
                  <p className="text-sm text-warm-grey">
                    <strong>Burn Time:</strong> {product.burnTime} | <strong> Size:</strong> {product.size}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Shipping Information</h3>
                  <p className="text-warm-grey">
                    We offer free standard shipping on orders over $50. Orders are typically processed within 1-2 business days and delivered within 3-7 business days depending on your location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Order Process</h3>
                  <p className="text-warm-grey">
                    To place an order, simply click "Order on WhatsApp" button. Our team will assist you with product availability, pricing, and payment options directly through WhatsApp.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Return Policy</h3>
                  <p className="text-warm-grey">
                    Not completely satisfied? Return your unused candles within 30 days for a full refund. Items must be in original condition and packaging.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section>
          <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
              Pairs Well With
            </h2>
            <p className="text-warm-grey max-w-2xl mx-auto">
              Complete your collection with these complementary scents from the same collection.
            </p>
          </motion.div>
          <Grid cols={3}>
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
              >
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
          </Grid>
        </Section>
      )}
    </motion.div>
  );
};

export default ProductPage;