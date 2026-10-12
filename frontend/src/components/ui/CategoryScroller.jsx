import React from 'react';
import {
  Sparkles,
  Bath,
  UtensilsCrossed,
  LayoutGrid,
  Waves,
  Shirt
} from 'lucide-react';

const iconMap = {
  floor_care: Sparkles,
  bathroom: Bath,
  kitchen: UtensilsCrossed,
  glass_care: LayoutGrid,
  dishwash: Waves,
  laundry: Shirt
};

export const CategoryScroller = ({ categories = [], selectedCategory, onSelectCategory }) => {
  return (
    <section className="categories-section" aria-label="Product Categories">
      <div className="categories-track no-scrollbar">
        {categories.map((cat) => {
          const IconComp = iconMap[cat.id] || Sparkles;
          const isSelected = selectedCategory === cat.id;

          return (
            <div
              key={cat.id}
              className={`category-item ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectCategory && onSelectCategory(cat.id === selectedCategory ? null : cat.id)}
            >
              <div className="category-icon-box">
                <IconComp size={22} strokeWidth={1.9} color="#007377" />
              </div>
              <span className="category-name">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
