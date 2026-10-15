import React from 'react';
import { Search, ShoppingBag, Heart, User, MapPin, ChevronDown } from 'lucide-react';
import { useCartWishlist } from '../../context/CartWishlistContext';

export const DesktopNav = ({ onSearch, onSwitchTab }) => {
  const { cartCount, wishlist, showToast } = useCartWishlist();

  return (
    <div className="desktop-header-wrapper">
      <div className="desktop-nav-container">
        {/* Brand Logo & Location */}
        <div className="desktop-brand-group">
          <div
            className="desktop-brand-logo"
            onClick={() => onSwitchTab && onSwitchTab('home')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/logo.png" alt="ASM Shine Logo" />
            <span>ASM Shine</span>
          </div>

          <button
            className="delivery-location-btn"
            style={{ marginLeft: '12px' }}
            onClick={() => showToast('Delivery location: Banda 210001 (Free Express Delivery)')}
          >
            <MapPin size={16} color="#00878A" />
            <span>Deliver to <span className="location-name">Banda 210001</span></span>
            <ChevronDown size={14} color="#64748B" />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="desktop-search-bar">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search cleaning products (e.g. floor cleaner, dishwash, disinfectant)..."
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Quick Nav Actions */}
        <div className="desktop-actions-group">
          <button
            className="desktop-nav-btn"
            onClick={() => showToast(`Wishlist contains ${wishlist.size} saved items`)}
          >
            <Heart size={18} color={wishlist.size > 0 ? '#EF4444' : '#0F172A'} />
            <span>Wishlist ({wishlist.size})</span>
          </button>

          <button
            className="desktop-nav-btn"
            style={{ position: 'relative' }}
            onClick={() => onSwitchTab && onSwitchTab('cart')}
          >
            <ShoppingBag size={18} color="#00878A" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="nav-badge-pill" style={{ position: 'relative', top: 'auto', right: 'auto', marginLeft: '4px' }}>
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="desktop-nav-btn"
            onClick={() => onSwitchTab && onSwitchTab('about')}
          >
            <span>About Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
