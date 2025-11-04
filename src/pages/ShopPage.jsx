import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Section from '../components/ui/Section';
import {collections} from '../data/products';

const customCollectionDetails = {
  'all': {
    name: 'All',
    image: 'https://images.unsplash.com/photo-1614232229988-813b190c1f5a?w=400&h=400&fit=crop'
  },
  'gifting': {
    name: 'Gifting',
    image: 'https://images.unsplash.com/photo-1601920139843-13e5b026a7b3?w=400&h=400&fit=crop'
  },
  'jai-guruji': {
    name: 'Jai Guruji',
    image: 'https://images.unsplash.com/photo-1617953141905-67e8a1019da2?w=400&h=400&fit=crop'
  },
  'summer-special': {
    name: 'Summer Special',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop'
  },
  'winter-special': {
    name: 'Winter Special',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
  },
  'trending': {
    name: 'Trending',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop'
  }
};

const ShopPage = () => {
  const displayCollections = [
    {slug: 'all', ...customCollectionDetails['all']},
    ...collections.map(c => ({...c, ...customCollectionDetails[c.slug]}))
  ].filter(c => c.image); // Ensure only collections with images are shown

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 lg:pt-32"
    >
      <Section>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-charcoal mb-4">
            Order By Collections
          </h1>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayCollections.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/collection/${collection.slug}`} className="group block text-center">
                <div className="border border-gray-200 rounded-lg p-2 overflow-hidden group-hover:border-gold transition-colors">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-52 object-cover rounded-md" 
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-charcoal group-hover:text-gold transition-colors">
                  {collection.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default ShopPage;