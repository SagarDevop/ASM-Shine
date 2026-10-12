import React, { useEffect, useState } from 'react';
import { Header } from '../components/layout/Header';
import { DesktopNav } from '../components/navigation/DesktopNav';
import { BottomNav } from '../components/navigation/BottomNav';
import { CategoryScroller } from '../components/ui/CategoryScroller';
import { OfferStrip } from '../components/ui/OfferStrip';
import { HeroBanner } from '../components/ui/HeroBanner';
import { ProductSection } from '../components/ui/ProductSection';
import { AboutModal } from '../components/ui/AboutModal';
import { useCartWishlist } from '../context/CartWishlistContext';
import { api } from '../services/api';

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
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
          />
        </main>

        {/* Mobile Bottom Navigation Bar */}
        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'account') showToast('Account profile section');
            if (tab === 'cart') showToast('Shopping cart view');
            if (tab === 'categories') showToast('All categories view');
          }}
        />

        {/* Desktop Footer (Visible on screen width >= 1024px) */}
        <footer className="desktop-footer">
          <div className="desktop-footer-inner">
            <span>© 2026 ASM Shine E-Commerce Inc. All rights reserved.</span>
            <span>Premium Botanical Home Hygiene</span>
          </div>
        </footer>
      </div>

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
