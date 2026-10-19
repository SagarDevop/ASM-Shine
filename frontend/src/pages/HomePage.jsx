import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { DesktopNav } from '../components/navigation/DesktopNav';
import { BottomNav } from '../components/navigation/BottomNav';
import { OfferStrip } from '../components/ui/OfferStrip';
import { HeroBanner } from '../components/ui/HeroBanner';
import { ProductSection } from '../components/ui/ProductSection';
import { useCartWishlist } from '../context/CartWishlistContext';
import { api } from '../services/api';

export const HomePage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSwitchTab = (tab) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (tab === 'home') navigate('/');
    else if (tab === 'categories') navigate('/categories');
    else if (tab === 'about') navigate('/about');
    else if (tab === 'cart') navigate('/cart');
    else if (tab === 'account') {
      showToast('Account profile: Welcome to ASM Shine Official Store 🌿');
    }
  };

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`);
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
      {/* Desktop Navigation */}
      <DesktopNav
        onSearch={setSearchQuery}
        onSwitchTab={handleSwitchTab}
      />

      {/* Screen Container */}
      <div className="screen-container">
        {/* Mobile Header */}
        <Header
          onSearch={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSwitchTab={handleSwitchTab}
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
            onActionClick={() => handleSwitchTab('categories')}
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
            onActionClick={() => handleSwitchTab('categories')}
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
            onActionClick={() => handleSwitchTab('categories')}
            onSelectProduct={handleSelectProduct}
          />
        </main>

        {/* Desktop Footer */}
        <footer className="desktop-footer">
          <div className="desktop-footer-inner">
            <span>© 2026 ASM Shine E-Commerce Inc. All rights reserved.</span>
            <span>Premium Botanical Home Hygiene</span>
          </div>
        </footer>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab="home"
        onTabChange={handleSwitchTab}
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
