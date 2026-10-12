# Cleanora E-Commerce REST API Documentation
**Version:** `v1`  
**Base URL:** `http://localhost:5000/api/v1`

---

## Endpoints Overview

### 1. System Health
- **Endpoint:** `GET /health`
- **Response:**
  ```json
  {
    "status": "ok",
    "timestamp": "2026-10-12T17:00:00.000Z",
    "uptime": 120.45
  }
  ```

---

### 2. Products
- **`GET /products`**
  - **Query Parameters:**
    - `section` (optional): `best_sellers` | `everyday_essentials` | `recommended`
    - `category` (optional): `floor_care` | `bathroom` | `kitchen` | `glass_care` | `dishwash` | `laundry`
    - `search` (optional): string keyword query
  - **Response:**
    ```json
    {
      "success": true,
      "count": 6,
      "data": [
        {
          "id": "prod_1",
          "name": "CLEANORA Surface & Floor Cleaner Liquid (Citrus Fragrance)",
          "category": "floor_care",
          "section": "best_sellers",
          "size": "1 L",
          "price": 199,
          "originalPrice": 249,
          "discountPercent": 20,
          "rating": 4.4,
          "reviewCount": "1.2k",
          "image": "/images/products/product_floor_cleaner.png",
          "inStock": true
        }
      ]
    }
    ```

- **`GET /products/:id`**
  - **Response:** Single product object with detailed description and ingredients.

---

### 3. Categories
- **`GET /categories`**
  - **Response:**
    ```json
    {
      "success": true,
      "data": [
        { "id": "floor_care", "name": "Floor Care", "icon": "Sparkles" },
        { "id": "bathroom", "name": "Bathroom", "icon": "Bath" },
        { "id": "kitchen", "name": "Kitchen", "icon": "Utensils" },
        { "id": "glass_care", "name": "Glass Care", "icon": "LayoutGrid" },
        { "id": "dishwash", "name": "Dishwash", "icon": "Waves" },
        { "id": "laundry", "name": "Laundry", "icon": "Shirt" }
      ]
    }
    ```

---

### 4. Banners & Offers
- **`GET /banners`**
  - **Response:** Promos and Hero banner configurations matching the Stitch design.

---

### 5. Cart Management
- **`GET /cart`**
  - **Response:** Current user's cart items (pre-seeded with 2 items to match Stitch badge '2').
- **`POST /cart/add`**
  - **Body:** `{ "productId": "prod_1", "quantity": 1 }`
- **`DELETE /cart/remove/:productId`**
