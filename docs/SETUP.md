# Cleanora E-Commerce PWA — Setup & Development Guide

This repository contains the mobile-first Progressive Web App (PWA) faithfully reproduced from Google Stitch Project `5980683010556273707`, complete with an Express.js Node.js backend.

---

## Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

---

## Directory Structure
```
Apex ecom/
├── frontend/        # React + Vite Progressive Web App
├── backend/         # Node.js + Express.js REST API
├── docs/            # Specifications and API Documentation
└── package.json     # Workspace root runner scripts
```

---

## Installation & Running Locally

### 1. Root Installation
Run from the root directory:
```bash
npm run install:all
```

### 2. Running Both Frontend and Backend Concurrently
```bash
npm run dev
```
- **Frontend URL:** `http://localhost:5173`
- **Backend API:** `http://localhost:5000/api/v1`
- **Health Check:** `http://localhost:5000/api/v1/health`

---

## Running Individually

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Testing PWA Installability
1. Open Google Chrome or Microsoft Edge.
2. Navigate to `http://localhost:5173`.
3. Open DevTools -> **Application** tab.
4. Verify **Manifest** is detected with valid icons.
5. Verify **Service Workers** is registered and active.
6. Click the install icon in the URL bar to test PWA standalone installation.
