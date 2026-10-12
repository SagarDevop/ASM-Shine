import React from 'react';
import { Tag } from 'lucide-react';

export const OfferStrip = ({ offer, onCopyCode }) => {
  const text = offer?.text || 'Mega Home Cleaning Sale: Flat 30% OFF on Top E...';
  const code = offer?.code || 'CLEAN30';

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    if (onCopyCode) onCopyCode(code);
  };

  return (
    <div className="promo-strip" role="region" aria-label="Special Offers">
      <div className="promo-left">
        <Tag size={15} color="#04383A" strokeWidth={2.4} />
        <span>{text}</span>
      </div>
      <button className="promo-badge" onClick={handleCopy} title="Copy coupon code">
        {code}
      </button>
    </div>
  );
};
