import React from 'react';
import { X, Sparkles, ShieldCheck, Leaf, HeartHandshake, Award } from 'lucide-react';

export const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="about-modal-backdrop" onClick={onClose}>
      <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="about-modal-header">
          <div className="about-brand-row">
            <img src="/images/logo.png" alt="ASM Shine Logo" className="about-logo" />
            <div>
              <h3 className="about-title">About ASM Shine</h3>
              <p className="about-subtitle">Pure Hygiene • Botanical Formulations</p>
            </div>
          </div>
          <button className="about-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="about-body">
          <p className="about-intro">
            <strong>ASM Shine</strong> is India's premier home hygiene and surface wellness brand, engineered to eliminate <strong>99.9% of germs and pathogens</strong> using biodegradable botanical actives without pungent chemical fumes.
          </p>

          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="about-feature-icon teal">
                <Leaf size={20} />
              </div>
              <div className="about-feature-info">
                <h4>Eco Active Botanical Formula</h4>
                <p>Enriched with pure neem leaf extracts and organic citrus peel essential oils.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon blue">
                <ShieldCheck size={20} />
              </div>
              <div className="about-feature-info">
                <h4>99.9% Hospital-Grade Disinfection</h4>
                <p>Kills bacteria, fungi, and household viruses within 30 seconds of contact.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon amber">
                <Sparkles size={20} />
              </div>
              <div className="about-feature-info">
                <h4>Zero Harsh Fumes</h4>
                <p>Gentle on lungs, pets, and children; leaves a crisp refreshing fragrance.</p>
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon green">
                <Award size={20} />
              </div>
              <div className="about-feature-info">
                <h4>100% Recyclable Packaging</h4>
                <p>Sustainable, BPA-free ergonomic containers designed for reduced plastic footprint.</p>
              </div>
            </div>
          </div>

          <div className="about-contact-box">
            <h4>Customer Happiness & Assurance</h4>
            <p>Email: <strong>support@asmshine.com</strong></p>
            <p>Toll-Free: <strong>1800-ASM-SHINE (276-74463)</strong></p>
            <p>Bangalore, Karnataka — 560038, India</p>
          </div>
        </div>

        <div className="about-footer">
          <button className="about-done-btn" onClick={onClose}>
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
