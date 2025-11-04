import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import ResponsiveProductGrid from '../components/ui/ResponsiveProductGrid';
import GridLayoutToggle from '../components/ui/GridLayoutToggle';
import FilterSidebar from '../components/ui/FilterSidebar';
import { collections, getProductsByCategory, products as allProducts } from '../data/products';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFilter, FiX } = FiIcons;

const CollectionPage = () => {
  const { slug } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isAllProducts = slug === 'all';
  const collection = isAllProducts 
    ? {
        name: 'All Products', 
        description: 'Browse all our collections.', 
        image: '/asserts/img/product/Trending2.png'
      } 
    : collections.find(c => c.slug === slug);
  
  const products = useMemo(() => 
    isAllProducts ? allProducts : getProductsByCategory(slug),
    [slug, isAllProducts]
  );

  const [filters, setFilters] = useState({
    availability: [],
    price: { min: '', max: '' }
  });
  const [sortBy, setSortBy] = useState('best-selling');
  const [gridLayout, setGridLayout] = useState({
    id: 3,
    label: '3 columns',
    gridSize: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  });

  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 1000 };
    const prices = products.map(p => p.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [products]);

  const featuredProducts = useMemo(() => 
    products.filter(p => p.isNew || p.discount),
    [products]
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    if (filters.availability.length > 0) {
      filtered = filtered.filter(p => {
        const inStock = p.inStock;
        if (filters.availability.includes('in_stock') && inStock) return true;
        if (filters.availability.includes('out_of_stock') && !inStock) return true;
        return false;
      });
    }
    const minPrice = parseFloat(filters.price.min);
    const maxPrice = parseFloat(filters.price.max);
    if (!isNaN(minPrice)) filtered = filtered.filter(p => p.price >= minPrice);
    if (!isNaN(maxPrice)) filtered = filtered.filter(p => p.price <= maxPrice);

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'alpha-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'best-selling':
      default:
        filtered.sort((a, b) => (b.sold || 0) - (a.sold || 0));
        break;
    }
    return filtered;
  }, [products, filters, sortBy]);

  const handleAvailabilityChange = e => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      availability: checked ? [...prev.availability, value] : prev.availability.filter(item => item !== value)
    }));
  };

  const handlePriceChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      price: { ...prev.price, [name]: value }
    }));
  };

  const resetFilterGroup = group => {
    const resetState = {
      availability: [],
      price: { min: '', max: '' }
    };
    setFilters(prev => ({
      ...prev,
      [group]: resetState[group]
    }));
  };

  const inStockCount = useMemo(() => products.filter(p => p.inStock).length, [products]);
  const outOfStockCount = useMemo(() => products.filter(p => !p.inStock).length, [products]);

  if (!collection) {
    return (
      <div className="pt-16 lg:pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-charcoal mb-4">Collection Not Found</h1>
          <p className="text-warm-grey">The collection you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const filterSidebarProps = {
    filters,
    priceRange,
    handleAvailabilityChange,
    handlePriceChange,
    resetFilterGroup,
    featuredProducts,
    inStockCount,
    outOfStockCount,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16 lg:pt-32">
      <section className="relative h-[25vh] lg:h-[30vh] overflow-hidden bg-gray-200">
        <img src={collection.image} alt={collection.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl lg:text-5xl font-serif font-semibold mb-2">{collection.name}</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span> / </span>
            <span>{collection.name}</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="lg:hidden mb-6 flex justify-between items-center">
          <button onClick={() => setIsFilterOpen(true)} className="flex items-center space-x-2 text-charcoal font-medium p-2">
            <SafeIcon icon={FiFilter} className="w-5 h-5" />
            <span>Filter & Sort</span>
          </button>
          <p className="text-sm text-warm-grey">{filteredAndSortedProducts.length} Results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 xl:gap-x-12">
          {/* Fixed Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-32 lg:self-start">
            <div className="h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-6">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-6 pb-4 border-b border-gray-200">
                Filter & Sort
              </h2>
              <FilterSidebar {...filterSidebarProps} />
            </div>
          </aside>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div className="fixed inset-0 z-50 lg:hidden" initial="closed" animate="open" exit="closed">
                <motion.div onClick={() => setIsFilterOpen(false)} className="absolute inset-0 bg-black" variants={{ open: { opacity: 0.5 }, closed: { opacity: 0 } }} transition={{ duration: 0.3 }} />
                <motion.div className="absolute top-0 left-0 h-full w-full max-w-sm bg-white p-6 overflow-y-auto" variants={{ open: { x: 0 }, closed: { x: '-100%' } }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                  <div className="flex justify-between items-center mb-6 pb-4 border-b">
                    <h2 className="text-xl font-serif font-semibold">Filter & Sort</h2>
                    <button onClick={() => setIsFilterOpen(false)} className="p-2"> <SafeIcon icon={FiX} className="w-6 h-6" /> </button>
                  </div>
                  <FilterSidebar {...filterSidebarProps} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-warm-grey mb-4 sm:mb-0 hidden lg:block">
                Showing {filteredAndSortedProducts.length} Results
              </p>
              <div className="flex items-center gap-4 w-full justify-between lg:w-auto lg:justify-end">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
                  <option value="best-selling">Best selling</option>
                  <option value="alpha-asc">Alphabetically, A-Z</option>
                  <option value="alpha-desc">Alphabetically, Z-A</option>
                  <option value="price-asc">Price, low to high</option>
                  <option value="price-desc">Price, high to low</option>
                </select>
                <div className="hidden sm:block">
                  <GridLayoutToggle currentLayout={gridLayout} onLayoutChange={setGridLayout} />
                </div>
              </div>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <ResponsiveProductGrid products={filteredAndSortedProducts} layoutConfig={gridLayout} />
            ) : (
              <div className="text-center py-12">
                <p className="text-warm-grey text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </Section>
    </motion.div>
  );
};

export default CollectionPage;