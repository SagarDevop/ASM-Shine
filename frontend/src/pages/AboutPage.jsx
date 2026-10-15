import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Share2
} from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const AboutPage = ({ onBack, onExploreCatalog }) => {
  const { showToast } = useCartWishlist();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ASM Shine — Pure Hygiene & Botanical Care',
          text: 'Discover ASM Shine: 99.9% hospital-grade germ kill with zero harsh fumes!',
          url: window.location.href
        });
      } catch (e) {
        // user cancelled
      }
    } else {
      navigator.clipboard?.writeText?.(window.location.href);
      showToast('Page link copied to clipboard! 📋');
    }
  };

  return (
    <div className="about-page-view">
      {/* 1. Flipkart-style Top Bar */}
      <header className="page-top-header">
        <button
          type="button"
          className="page-back-btn"
          onClick={onBack}
          aria-label="Back to Home"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="page-header-title-box" onClick={onBack}>
          <img src="/images/logo.png" alt="ASM Shine" className="page-mini-logo" />
          <span className="page-header-title">About ASM Shine</span>
        </div>
        <button
          type="button"
          className="page-action-btn"
          onClick={handleShare}
          aria-label="Share page"
        >
          <Share2 size={20} />
        </button>
      </header>

      {/* 2. Hero Brand Section */}
      <section className="about-hero-card">
        <div className="about-hero-badge">
          <Sparkles size={13} fill="#FFE500" color="#FFE500" />
          <span>OFFICIAL BRAND STORY</span>
        </div>
        <img
          src="/images/logo.png"
          alt="ASM Shine"
          className="about-hero-logo"
        />
        <h1 className="about-hero-heading">ASM Shine</h1>
        <p className="about-hero-tagline">
          Pure Hygiene • Botanical Formulations
        </p>
        <div className="about-hero-meta">
          <span>Est. 2024</span>
          <span className="about-meta-dot">•</span>
          <span>Made with Pride in India 🇮🇳</span>
          <span className="about-meta-dot">•</span>
          <span>99.9% Bio-Active Protection</span>
        </div>
      </section>

      {/* 3. The Brand Mission */}
      <section className="about-content-card">
        <div className="about-section-tag">OUR MISSION</div>
        <h2 className="about-card-title">Clean Homes Shouldn't Mean Toxic Fumes</h2>
        <p className="about-paragraph">
          Conventional household floor cleaners and bathroom sprays rely heavily on caustic hydrochloric acid, bleach, and volatile organic compounds that irritate eyes and damage lungs.
        </p>
        <p className="about-paragraph">
          <strong>ASM Shine</strong> was engineered with a clear purpose: to deliver <strong>hospital-grade 99.9% pathogen eradication</strong> powered by concentrated citrus peel actives, neem extract, and plant-derived surfactants that leave zero toxic chemical residues.
        </p>
      </section>

      {/* 4. 4 Core Pillars */}
      <section className="about-content-card">
        <div className="about-section-tag">WHY ASM SHINE</div>
        <h2 className="about-card-title">The 4 Botanical Pillars</h2>

        <div className="about-pillars-grid">
          {/* Pillar 1 */}
          <div className="about-pillar-item">
            <div className="about-pillar-icon-box teal">
              <Leaf size={22} />
            </div>
            <div className="about-pillar-content">
              <h3>Eco-Active Botanical Actives</h3>
              <p>Formulated with pure neem leaf extracts and cold-pressed citrus essential oils that naturally cut through grease and grime.</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="about-pillar-item">
            <div className="about-pillar-icon-box blue">
              <ShieldCheck size={22} />
            </div>
            <div className="about-pillar-content">
              <h3>99.9% Hospital-Grade Disinfection</h3>
              <p>Certified lab testing verifies destruction of household bacteria, viral strains, and bathroom mould within 30 seconds of application.</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="about-pillar-item">
            <div className="about-pillar-icon-box amber">
              <Sparkles size={22} />
            </div>
            <div className="about-pillar-content">
              <h3>Zero Harsh Fumes (Pet & Kid Safe)</h3>
              <p>No burning hydrochloric acid, no stinging chlorine bleach fumes. Completely safe for toddlers crawling on floors and curious pets.</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="about-pillar-item">
            <div className="about-pillar-icon-box green">
              <Award size={22} />
            </div>
            <div className="about-pillar-content">
              <h3>100% Recyclable Eco-Bottles</h3>
              <p>Food-grade, BPA-free ergonomic containers designed for reduced plastic footprint and 100% recycling post consumer use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Certifications */}
      <section className="about-content-card">
        <div className="about-section-tag">QUALITY ASSURANCE</div>
        <h2 className="about-card-title">Standard of Excellence</h2>
        <div className="about-badges-row">
          <div className="about-cert-chip">
            <CheckCircle2 size={16} color="#059669" />
            <span>ISO 9001:2015 Facility</span>
          </div>
          <div className="about-cert-chip">
            <CheckCircle2 size={16} color="#059669" />
            <span>Cruelty-Free (Never Tested on Animals)</span>
          </div>
          <div className="about-cert-chip">
            <CheckCircle2 size={16} color="#059669" />
            <span>Dermatologically Safe</span>
          </div>
          <div className="about-cert-chip">
            <CheckCircle2 size={16} color="#059669" />
            <span>100% Biodegradable Surfactants</span>
          </div>
        </div>
      </section>

      {/* 6. Customer Care & Headquarters */}
      <section className="about-content-card contact-card">
        <div className="about-section-tag">GET IN TOUCH</div>
        <h2 className="about-card-title">Customer Happiness Desk</h2>

        <div className="about-contact-list">
          <a href="tel:180027674463" className="about-contact-row">
            <div className="about-contact-icon">
              <Phone size={18} />
            </div>
            <div className="about-contact-text">
              <span className="contact-label">Toll-Free Helpline</span>
              <span className="contact-value">1800-ASM-SHINE (276-74463)</span>
            </div>
            <ExternalLink size={14} className="contact-arrow" />
          </a>

          <a href="mailto:support@asmshine.com" className="about-contact-row">
            <div className="about-contact-icon">
              <Mail size={18} />
            </div>
            <div className="about-contact-text">
              <span className="contact-label">Official Support Email</span>
              <span className="contact-value">support@asmshine.com</span>
            </div>
            <ExternalLink size={14} className="contact-arrow" />
          </a>

          <div className="about-contact-row no-hover">
            <div className="about-contact-icon">
              <MapPin size={18} />
            </div>
            <div className="about-contact-text">
              <span className="contact-label">Headquarters</span>
              <span className="contact-value">Bangalore, Karnataka — 560038, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <div className="about-bottom-cta-wrap">
        <button
          type="button"
          className="about-explore-btn"
          onClick={onExploreCatalog || onBack}
        >
          <span>Explore All Products</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
