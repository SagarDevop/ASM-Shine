import React, { useEffect, useState } from 'react';
import { Header } from '../components/layout/Header';
import { DesktopNav } from '../components/navigation/DesktopNav';
import { BottomNav } from '../components/navigation/BottomNav';
import { CategoryScroller } from '../components/ui/CategoryScroller';
import { OfferStrip } from '../components/ui/OfferStrip';
import { HeroBanner } from '../components/ui/HeroBanner';
import { ProductSection } from '../components/ui/ProductSection';
import { AboutModal } from '../components/ui/AboutModal';
import { ProductDetailPage } from './ProductDetailPage';
import { useCartWishlist } from '../context/CartWishlistContext';
import { api } from '../services/api';

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(true);
  const { toastMessage, showToast } = useCartWishlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [cats, bans, prods] = await Promise.all([
          api.getCategories(),
          api.getBanners(),
          api.getProducts()
        ]);
        setCategories(cats);
        setBanners(bans);
        setAllProducts(prods);
      } catch (err) {
        console.error('Failed to load home page data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sync with browser back/forward buttons and direct URL hash (e.g. #product/prod_1)
  useEffect(() => {
    if (allProducts.length > 0 && window.location.hash.startsWith('#product/')) {
      const pid = window.location.hash.replace('#product/', '');
      const found = allProducts.find((p) => p.id === pid);
      if (found) setSelectedProduct(found);
    }

    const handlePopState = () => {
      if (window.location.hash.startsWith('#product/')) {
        const pid = window.location.hash.replace('#product/', '');
        const found = allProducts.find((p) => p.id === pid);
        if (found) setSelectedProduct(found);
      } else {
        setSelectedProduct(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [allProducts]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.history.pushState({ productId: product.id }, '', `#product/${product.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProduct = () => {
    setSelectedProduct(null);
    if (window.location.hash.startsWith('#product')) {
      window.history.back();
    }
  };

  // Filter products by selected category or search term
  const filterProducts = (list) => {
    return list.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  };

  const bestSellers = filterProducts(allProducts.filter((p) => p.section === 'best_sellers'));
  const everydayEssentials = filterProducts(allProducts.filter((p) => p.section === 'everyday_essentials'));
  const recommended = filterProducts(allProducts.filter((p) => p.section === 'recommended'));

  const handleCopyOffer = (code) => {
    showToast(`Coupon ${code} copied to clipboard! 🎉`);
  };

  const handleExploreHero = () => {
    setSelectedCategory('floor_care');
    showToast('Viewing Citrus & Neem Active Range 🍊');
  };

  return (
    <div className="app-shell">
      {/* If a product is selected, render Flipkart exact Product Detail Page */}
      {selectedProduct ? (
        <ProductDetailPage
          product={selectedProduct}
          onBack={handleBackFromProduct}
          onSelectProduct={handleSelectProduct}
        />
      ) : (
        <>
          {/* Desktop Navigation (Visible on screen width >= 1024px) */}
          <DesktopNav onSearch={setSearchQuery} />

          {/* Screen Container (Strict 390px mobile proportion, scales on desktop) */}
          <div className="screen-container">
            {/* Mobile Header (Visible on screen width < 1024px) */}
            <Header
              onSearch={setSearchQuery}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <main className="main-content">
              {/* Promotional Offer Strip */}
              <OfferStrip offer={banners?.announcement} onCopyCode={handleCopyOffer} />

              {/* Hero Feature Banner */}
              <HeroBanner banner={banners?.hero} onExplore={handleExploreHero} />

              {/* Section 1: Best Sellers (HOT) */}
              <ProductSection
                title="Best Sellers"
                badge="HOT"
                actionText="View All"
                actionLinkStyle="chevron"
                products={bestSellers}
                showRating={true}
                sizePosition="below"
                onActionClick={() => showToast('Browsing all Best Sellers')}
                onSelectProduct={handleSelectProduct}
              />

              {/* Section 2: Everyday Cleaning Essentials */}
              <ProductSection
                title="Everyday Cleaning Essentials"
                actionText="EXPLORE"
                actionLinkStyle="plain-text"
                products={everydayEssentials}
                showRating={false}
                sizePosition="overlay"
                onActionClick={() => showToast('Browsing Cleaning Essentials')}
                onSelectProduct={handleSelectProduct}
              />

              {/* Section 3: Recommended for You */}
              <ProductSection
                title="Recommended for You"
                subtitle="Based on household cleaning trends"
                actionText="SEE MORE"
                actionLinkStyle="plain-text"
                products={recommended}
                showRating={false}
                sizePosition="overlay"
                onActionClick={() => showToast('Browsing recommendations')}
                onSelectProduct={handleSelectProduct}
              />
            </main>

            {/* Desktop Footer (Visible on screen width >= 1024px) */}
            <footer className="desktop-footer">
              <div className="desktop-footer-inner">
                <span>© 2026 ASM Shine E-Commerce Inc. All rights reserved.</span>
                <span>Premium Botanical Home Hygiene</span>
              </div>
            </footer>
          </div>

          {/* Mobile Bottom Navigation Bar (Visible only on main browsing view) */}
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              if (tab === 'account') showToast('Account profile section');
              if (tab === 'cart') showToast('Shopping cart view');
              if (tab === 'categories') showToast('All categories view');
            }}
          />
        </>
      )}

      {/* About ASM Shine Brand Modal */}
      <AboutModal
        isOpen={activeTab === 'about'}
        onClose={() => setActiveTab('home')}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
