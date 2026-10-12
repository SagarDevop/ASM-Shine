import React from 'react';
import { Home, Grid2X2, BadgeCheck, ShoppingBag, User } from 'lucide-react';
import { useCartWishlist } from '../../context/CartWishlistContext';

export const BottomNav = ({ activeTab = 'home', onTabChange }) => {
  const { cartCount } = useCartWishlist();

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: Grid2X2 },
    { id: 'about', label: 'About', icon: BadgeCheck },
    { id: 'cart', label: 'Cart', icon: ShoppingBag, badge: cartCount },
    { id: 'account', label: 'Account', icon: User }
  ];

  return (
    <nav className="bottom-nav" aria-label="Mobile Navigation">
      <div className="bottom-nav-inner">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              id={`nav-tab-${tab.id}`}
              key={tab.id}
              className={`nav-tab-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange && onTabChange(tab.id)}
            >
              <div className="nav-icon-wrapper">
                <IconComponent
                  size={20}
                  strokeWidth={isActive ? 2.3 : 1.8}
                  fill={isActive && tab.id === 'home' ? 'rgba(0, 135, 138, 0.15)' : 'none'}
                />
                {tab.badge !== null && tab.badge !== undefined && (
                  <span className="nav-badge-pill">{tab.badge}</span>
                )}
              </div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
