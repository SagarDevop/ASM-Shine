import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const ProductSection = ({
  title,
  badge,
  subtitle,
  actionText = 'View All',
  actionLinkStyle = 'chevron', // 'chevron' | 'plain-text' | 'uppercase-teal'
  products = [],
  showRating = true,
  sizePosition = 'below',
  onActionClick,
  onSelectProduct
}) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="product-section" aria-label={title}>
      <div className="section-header-row">
        <div>
          <div className="section-title-wrap">
            <h2 className="section-title">{title}</h2>
            {badge && <span className="badge-hot">{badge}</span>}
          </div>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        {actionText && (
          <button
            className={`section-action-link ${actionLinkStyle === 'plain-text' ? 'plain' : ''}`}
            onClick={onActionClick}
            aria-label={`${actionText} for ${title}`}
          >
            <span>{actionText}</span>
            {actionLinkStyle === 'chevron' && <ChevronRight size={14} />}
          </button>
        )}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showRating={showRating}
            sizePosition={sizePosition}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};
