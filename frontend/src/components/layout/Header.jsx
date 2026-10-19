import React, { useState, useEffect } from 'react';
import {
  MapPin,
  ChevronRight,
  Search,
  Ticket,
  Zap,
  ShoppingBag,
  Bath,
  UtensilsCrossed,
  Waves,
  WashingMachine
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Premium Floor Mop icon for Floor Care
const FloorMopIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v13" />
    <path d="M5 15h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" fill="currentColor" fillOpacity="0.22" />
    <path d="M7 18v3" />
    <path d="M10 18v3.5" />
    <path d="M14 18v3.5" />
    <path d="M17 18v3" />
  </svg>
);

// Premium Sparkling Window icon for Glass Care
const GlassCareIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="6.5" y1="6.5" x2="8.5" y2="8.5" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="15.5" y1="6.5" x2="17.5" y2="8.5" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const categoryIconMap = {
  floor_care: FloorMopIcon,
  bathroom: Bath,
  kitchen: UtensilsCrossed,
  glass_care: GlassCareIcon,
  dishwash: Waves,
  laundry: WashingMachine
};

export const Header = ({
  onSearch,
  categories = [],
  selectedCategory = null,
  onSelectCategory = () => {},
  onSwitchTab
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('1, Jhanjhari, Banda, Uttar Pradesh');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scrolled past ~60px, icons tuck away (icon andar) and name sticks
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const cycleLocation = () => {
    setLocation((prev) =>
      prev.includes('Banda')
        ? '560038, Indiranagar, Bangalore, Karnataka'
        : '1, Jhanjhari, Banda, Uttar Pradesh'
    );
  };

  return (
    <>
      {/* 1. Upper Header Section (Scrolls up and out of view on scroll) */}
      <div className="fk-upper-header mobile-only">
        {/* Row 1: 3 Pill Category / Brand Switchers (as shown in Screenshot 1) */}
        <div className="fk-pill-switcher-row">
          {/* Pill 1: Active Brand Pill (Yellow highlight with Logo & ASM Shine) */}
          <button
            className="fk-pill-tab active"
            type="button"
            onClick={() => {
              if (onSwitchTab) onSwitchTab('home');
              else navigate('/');
            }}
          >
            <img
              src="/images/logo.png"
              alt="ASM Shine"
              className="fk-pill-logo-img"
            />
            <span className="fk-pill-title">ASM Shine</span>
          </button>

          {/* Pill 2: Super Deals Pill */}
          <button
            className="fk-pill-tab white"
            type="button"
            onClick={() => {
              const el = document.querySelector('.offer-strip-banner') || document.querySelector('.main-content');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="fk-pill-icon-tag">🏷️</span>
            <span className="fk-pill-text-dark">Super Deals</span>
          </button>

          {/* Pill 3: Eco Range Pill */}
          <button
            className="fk-pill-tab white"
            type="button"
            onClick={() => onSelectCategory && onSelectCategory('floor_care')}
          >
            <span className="fk-pill-icon-plane">🌱</span>
            <span className="fk-pill-text-dark">Eco Range</span>
          </button>
        </div>

        {/* Row 2: Location & Rewards Row (as shown in Screenshot 1) */}
        <div className="fk-location-rewards-row">
          <div className="fk-location-box" onClick={cycleLocation}>
            <MapPin size={15} className="fk-location-pin" fill="#1E293B" color="#1E293B" />
            <span className="fk-location-address">{location}</span>
            <ChevronRight size={14} className="fk-location-chevron" />
          </div>

          <div className="fk-rewards-box">
            <div className="fk-reward-chip ticket" title="Coupons">
              <Ticket size={14} color="#7C3AED" />
            </div>
            <div className="fk-reward-chip coins" title="Coins">
              <Zap size={13} color="#F59E0B" fill="#F59E0B" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sticky Header Section (Search bar + unified category bar) */}
      <header className={`fk-sticky-container mobile-only ${isScrolled ? 'scrolled' : ''}`}>
        {/* Row 3: Rounded Pill Search Bar */}
        <div className="fk-search-bar-row">
          <div className="fk-search-pill-wrapper">
            <Search size={18} className="fk-search-blue-icon" />
            <input
              type="text"
              className="fk-search-input-pill"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search for Products"
            />
          </div>
        </div>

        {/* Row 4: Unified Category Bar (Icon on top, Name below; on scroll icon tucks inside, name stays stuck) */}
        <div className="fk-category-track no-scrollbar">
          {/* Default "For You" Tab */}
          <button
            type="button"
            className={`fk-cat-item ${!selectedCategory ? 'active' : ''}`}
            onClick={() => onSelectCategory(null)}
          >
            <div className="fk-cat-icon-box cat-for-you">
              <ShoppingBag size={20} className="fk-cat-icon-svg" />
            </div>
            <span className="fk-cat-name">For You</span>
            {!selectedCategory && <div className="fk-cat-indicator" />}
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const IconComp = categoryIconMap[cat.id] || ShoppingBag;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                type="button"
                key={cat.id}
                className={`fk-cat-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(isActive ? null : cat.id)}
              >
                <div className={`fk-cat-icon-box cat-${cat.id}`}>
                  <IconComp size={20} className="fk-cat-icon-svg" />
                </div>
                <span className="fk-cat-name">{cat.name}</span>
                {isActive && <div className="fk-cat-indicator" />}
              </button>
            );
          })}
        </div>
      </header>
    </>
  );
};
