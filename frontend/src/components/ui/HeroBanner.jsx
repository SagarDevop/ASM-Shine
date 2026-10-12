import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroBanner = ({ banner, onExplore }) => {
  const badge = banner?.badge || 'ECO FORMULATION';
  const title = banner?.title || 'Citrus & Neem Active Range';
  const subtitle = banner?.subtitle || '99.9% germ eradication without harsh toxic fumes';
  const ctaText = banner?.ctaText || 'EXPLORE >';
  const image = banner?.image || '/images/banners/hero_banner_photo.png';

  return (
    <div className="hero-card">
      <div className="hero-media-wrapper">
        <img
          src={image}
          alt={title}
          className="hero-img"
          loading="eager"
        />
      </div>

      <div className="hero-content">
        <div className="hero-text-col">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
        </div>

        <button
          className="hero-explore-btn"
          onClick={onExplore}
          aria-label={`Explore ${title}`}
        >
          <span>EXPLORE</span>
          <ChevronRight size={13} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
