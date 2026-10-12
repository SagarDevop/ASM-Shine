# Cleanora — Google Stitch to React PWA + Node.js Backend

A high-fidelity Progressive Web App (PWA) reproduction of Google Stitch Project `5980683010556273707` mobile storefront screen (`03_home_page`). Built with a modular React frontend and an independent Express.js REST API backend.

![Cleanora Banner](frontend/public/images/banners/hero_banner_photo.png)

---

## 🌟 Key Highlights

- **Exact Stitch Replication (Mobile):** Matches element positions, typography, spacing, aspect ratios, rating tags, badges, and the original Stitch asset imagery for the Cleanora mobile storefront screen.
- **Independent Desktop Layout:** Responsive CSS media queries create an intentional, multi-column desktop experience without compromising the pixel accuracy of the 390px mobile viewport.
- **PWA Ready:** Valid Web App Manifest (`manifest.webmanifest`), offline Service Worker caching strategy (`sw.js`), and installable icons (192×192 & 512×512).
- **Separated REST API Architecture:** Versioned endpoints under `/api/v1/` for products, categories, banners, and cart with centralized error handling and Mongoose/in-memory fallback support.
- **Interactive UI:** Dynamic wishlist toggling, cart count management (matching Stitch badge '2'), live search filtering, and coupon copying.

---

## 📁 Project Structure

```
Apex ecom/
├── frontend/
│   ├── public/
│   │   ├── icons/             # PWA app icons (192x192, 512x512)
│   │   ├── images/            # Extracted Stitch project product & banner assets
│   │   ├── manifest.webmanifest # PWA configuration
│   │   ├── sw.js              # Offline service worker
│   │   └── favicon.svg        # Cleanora SVG brand icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Mobile Header with location & search
│   │   │   ├── navigation/    # BottomNav (Mobile) & DesktopNav
│   │   │   └── ui/            # CategoryScroller, OfferStrip, HeroBanner, ProductCard
│   │   ├── context/           # Cart and Wishlist state
│   │   ├── pages/             # HomePage screen
│   │   ├── services/          # api.js REST client
│   │   └── styles/            # variables.css, global.css, responsive.css
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── config/            # DB connection with in-memory fallback
│   │   ├── controllers/       # Product, Category, Banner, Cart controllers
│   │   ├── middleware/        # Centralized error handler
│   │   ├── models/            # Mongoose schemas
│   │   ├── routes/            # REST API routes (/api/v1)
│   │   ├── services/          # Data service layer
│   │   ├── app.js             # Express application
│   │   └── server.js          # Server entrypoint
│   └── package.json
├── docs/
│   ├── DESIGN.md              # Extracted tokens and layout blueprints
│   ├── API.md                 # REST API documentation
│   └── SETUP.md               # Quickstart guide
├── package.json               # Monorepo runner scripts
└── README.md
```

---

## 🚀 Quick Start

### 1. Start Both Backend and Frontend
In the project root, run:
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Or concurrently from root:
```bash
npm run dev
```

- **Frontend App:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000/api/v1](http://localhost:5000/api/v1)
- **API Health Check:** [http://localhost:5000/api/v1/health](http://localhost:5000/api/v1/health)

---

## 📱 Testing Viewports
- **Mobile Viewports:** 360 × 800, 390 × 844 (Base Stitch), 430 × 932
- **Tablet Viewport:** 768 × 1024
- **Desktop Viewport:** 1366 × 768, 1920 × 1080
