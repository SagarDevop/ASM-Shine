# Design System Specification — Cleanora E-Commerce PWA
**Source of Truth:** Google Stitch Project `5980683010556273707`  
**Reference Screen:** `03_home_page` (Mobile Storefront & Home Screen)  
**Dimensions:** 390px × 1564px viewport ratio (Mobile-First 390 × 844 base)

---

## 1. Visual Theme & Brand Atmosphere
- **Brand Name:** CLEANORA (Home & Surface Hygiene Essentials)
- **Vibe:** Clean, eco-conscious, clinical-meets-home-comfort, premium everyday FMCG
- **Elevation Philosophy:** Crisp cards on subtle neutral canvas, minimal shadows (`0 1px 3px rgba(0,0,0,0.06)`), high information density with breathing room.

---

## 2. Color Palette & Roles
| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Cleanora Teal | `#00878A` / `#007377` | Active nav icons, accent links, headers |
| **Offer / Promo Strip**| Cyan Accent | `#52D1DC` / `#4DD0E1` | Sale announcement bar, explore button |
| **Eco Accent** | Pine Green | `#006064` / `#0F4C45` | "ECO FORMULATION" hero pill |
| **Hot Tag** | Warm Amber | `#F59E0B` / `#D97706` | "HOT" badge background `#FEF3C7` |
| **Discount Tag** | Emerald Green | `#059669` / `#0D9488` | "20% off", "17% off", discount labels |
| **Surface Canvas** | Soft Slate | `#F8F9FA` | Page body background |
| **Card Surface** | Pure White | `#FFFFFF` | Product cards, header, nav bar |
| **Text Primary** | Deep Charcoal | `#0F172A` | Product titles, primary numbers |
| **Text Secondary** | Slate Gray | `#64748B` | Subtitles, ratings, unit quantities |
| **Border / Divider** | Crisp Border | `#E2E8F0` | Card borders, search input, dividers |

---

## 3. Typography & Hierarchy
- **Font Family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Scale:**
  - **Header Titles:** 18px, Bold (700) — "Citrus & Neem Active Range"
  - **Section Headings:** 16px, Semi-Bold (600) — "Best Sellers", "Everyday Cleaning Essentials"
  - **Product Titles:** 13px, Medium (500), 2-line clamped — "CLEANORA Surface & Floor Cleaner Liquid..."
  - **Price:** 15px, Bold (700) — "₹199"
  - **Original Price (Strikethrough):** 12px, Regular (400), Slate Gray — "₹249"
  - **Discount:** 12px, Semi-Bold (600), Emerald — "20% off"
  - **Badges & Pills:** 10px–11px, Bold (700), Upper / Mixed case — "1 L", "500 ml", "HOT", "CLEAN30"
  - **Bottom Navigation:** 10px, Medium (500)

---

## 4. Component Stylings & Layout Blueprint

### A. Top Sticky Header
- **Delivery Row:** Location pin icon, "Deliver to Bangalore - 560001 ⌵", with "CHANGE" / "HOME" quick-action text.
- **Search Bar:**
  - Full width with 12px horizontal inset
  - Leading search lens icon (`#94A3B8`)
  - Placeholder: `"Search cleaning products (e.g. floor cleaner, c..."`
  - Trailing microphone and camera scan icons for voice/visual search

### B. Category Scroller
- Horizontal swipe container with hidden scrollbars
- Categories:
  1. Floor Care (`Mop / Broom`)
  2. Bathroom (`Bathtub / Shower`)
  3. Kitchen (`Sink / Utensil`)
  4. Glass Care (`Window / Spray`)
  5. Dishwash (`Hand / Foam`)
  6. Laundry (`Washing Machine / Fabric`)

### C. Promotional Banner Bar
- Cyan `#52D1DC` full-width band
- Tag icon, text: `"Mega Home Cleaning Sale: Flat 30% OFF on Top E..."`
- Code badge: `"CLEAN30"` in crisp white pill

### D. Hero Feature Banner
- Eco formulation tag in dark teal `#0F4C45`
- High-res photography of citrus & neem bottles
- Title: `"Citrus & Neem Active Range"`
- Description: `"99.9% germ eradication without harsh toxic fumes"`
- Action: Cyan CTA `"EXPLORE >"`

### E. Product Grids (2-Column Mobile, 4-Column Desktop)
- **Aspect Ratio:** Card square 1:1 image container with subtle border
- **Overlay Elements:** Wishlist heart (white circular button), Rating pill `4.4 ★ (1.2k)`
- **Quantity Pill:** `1 L`, `500 ml`, `750 ml`
- **Product Title:** Two-line clamp
- **Pricing Row:** Current price, Strikethrough MRP, Discount %

### F. Bottom Navigation Bar (Mobile) / Top Bar (Desktop)
- Mobile: Fixed bottom 56px bar with Home, Categories, Wishlist, Cart (badge '2'), Account
- Desktop: Full top navigation bar with search bar, location picker, categories dropdown, wishlist, cart counter, and account menu.

---

## 5. Responsive Desktop Adaptation Strategy
- **Max Content Width:** `1280px` centered with clean responsive margins
- **Grid Layout:**
  - Mobile (<640px): 2 columns, exactly matching Stitch 390px reference
  - Tablet (640px - 1024px): 3 columns with balanced spacing
  - Desktop (>1024px): 4 columns with enhanced hover cards, quick "Add to Cart" slide-up button
- **Isolated CSS:** Mobile styles remain 100% faithful to the Stitch reference; desktop enhancements live in responsive breakpoints (`@media (min-width: 1024px)`).
