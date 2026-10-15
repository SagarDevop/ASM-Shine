import React from 'react';
import { Star } from 'lucide-react';

export const ProductCard = ({ product, showRating = true, sizePosition = 'below', onSelectProduct }) => {
  return (
    <article
      className="product-card clickable"
      id={`product-${product.id}`}
      onClick={() => onSelectProduct && onSelectProduct(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onSelectProduct) onSelectProduct(product);
        }
      }}
    >
      {/* Product Image Area with overlays */}
      <div className="product-media-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />

        {/* Size Pill when positioned on image overlay (e.g. Everyday essentials) */}
        {sizePosition === 'overlay' && product.size && (
          <div className="size-pill-overlay">{product.size}</div>
        )}

        {/* Rating Badge (bottom-left overlay on image) */}
        {showRating && product.rating && (
          <div className="rating-badge">
            <span>{product.rating}</span>
            <Star size={11} className="star-icon" />
            {product.reviewCount && (
              <span className="reviews-count">({product.reviewCount})</span>
            )}
          </div>
        )}
      </div>

      {/* Product Details & Pricing */}
      <div className="product-details">
        {/* Size Pill when positioned below image (e.g. Best Sellers) */}
        {sizePosition === 'below' && product.size && (
          <div className="product-size-pill">{product.size}</div>
        )}

        <h3 className="product-name" title={product.name}>
          {product.shortName || product.name}
        </h3>

        <div className="price-row">
          <span className="price-current">₹{product.price}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice}</span>
          )}
          {product.discountPercent && (
            <span className="price-discount">{product.discountPercent}% off</span>
          )}
        </div>
      </div>
    </article>
  );
};
