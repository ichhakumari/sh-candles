import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import GiftingPage from './pages/GiftingPage';
import ContactPage from './pages/ContactPage';
import WinterSpecialPage from './pages/WinterSpecialPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collection/:slug" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gifting" element={<GiftingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/winter-special" element={<WinterSpecialPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;