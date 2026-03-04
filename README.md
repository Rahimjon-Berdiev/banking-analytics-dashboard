# 💰 Finance Tracker

> A full-stack personal finance tracker with smart receipt scanning, analytics charts, and Google authentication.

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Backend](https://img.shields.io/badge/Backend-Django%20%7C%20Express.js-green)
![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

---

## 🔍 Overview

Finance Tracker is a comprehensive personal finance management application that helps users track transactions, categorize expenses, and gain insights into their spending habits through intuitive analytics and visualizations.

Built with a **Django REST API** backend, **Express.js** middleware layer, and a **React** frontend, this project follows production-grade architecture patterns including JWT authentication, Google OAuth2 social login, and an AI-powered receipt scanner using OpenCV and Tesseract OCR.

---

## ✨ Features

### ✅ Available Now
| Feature | Description |
|---|---|
| 💰 Add Transactions | Manually add income and expense transactions |
| 🏷️ Categorize Expenses | Assign categories with custom colors and icons |
| 📋 Transaction History | View full paginated transaction history |
| 🔍 Filter & Sort | Filter by type, category, date range; sort by amount/date |
| 📊 Summary Analytics | View total income, expenses, and net balance |
| 🔐 JWT Authentication | Secure register/login with access + refresh tokens |
| 🔑 Google OAuth2 | One-click sign in with Google |

### 🚧 Coming Soon
| Feature | Description |
|---|---|
| 📥 CSV Import | Bulk import transactions from bank CSV exports |
| 📈 Charts & Visualizations | Pie chart, bar chart, and line chart analytics |
| 📷 Receipt Scanner | Auto-extract transaction data from receipt photos using OpenCV + OCR |
| 📤 CSV Export | Export transaction history to CSV |

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Django 4.x** | Main REST API framework |
| **Django REST Framework** | API serializers, viewsets, authentication |
| **SimpleJWT** | JWT access + refresh token authentication |
| **PostgreSQL** | Database |
| **OpenCV + Tesseract** | Receipt image processing & OCR |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **React Router v6** | Client-side routing |
| **Axios** | HTTP client with JWT interceptors |
| **Zustand** | Global state management |
| **React Query** | Server state + caching |
| **Recharts** | Data visualizations |
| **CSS3** & **Tailwind** | Styling |

### DevOps
| Technology | Purpose |
|---|---|
| **Docker** | Containerization |
| **GitHub Actions** | CI/CD pipeline |
| **Vercel** | Frontend deployment |
| **Railway / Render** | Backend deployment |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/rahimjonberdiev/finance-tracker.git
cd finance-tracker
```

### 2. Backend Setup (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate          # Mac/Linux
venv\Scripts\activate             # Windows

pip install -r requirements-dev.txt

cp ../.env.example .env           # Add your credentials

python manage.py migrate
python manage.py seed_categories
python manage.py runserver        # → http://localhost:8000
```

### 3. Express.js Middleware Setup
```bash
cd express
npm install
npm run dev                       # → http://localhost:3001
```

### 4. Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev                       # → http://localhost:5173
```

### 5. Run with Docker
```bash
docker-compose up --build
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py seed_categories
```

---

## 🗺️ Roadmap

### Sprint 1 — Foundation *(Current)*
- [x] Django project setup + PostgreSQL
- [x] React + Vite frontend setup
- [x] JWT Authentication (register, login, logout)
- [x] Google OAuth2 social login
- [x] Transaction CRUD API
- [x] Category management
- [x] Transaction list UI with filters

### Sprint 2 — Analytics
- [ ] Analytics API (summary, by-category, monthly)
- [ ] Dashboard with summary cards
- [ ] Pie chart (expenses by category)
- [ ] Bar chart (monthly income vs expenses)
- [ ] Line chart (balance over time)

### Sprint 3 — Advanced Features
- [ ] CSV import from bank exports
- [ ] CSV export of transaction history
- [ ] Receipt scanner (OpenCV + Tesseract OCR)
- [ ] Auto-fill transaction form from receipt photo

### Sprint 4 — Production
- [ ] Docker containerization
- [ ] Deploy backend to Railway/Render
- [ ] Deploy frontend to Vercel
- [ ] GitHub Actions CI/CD pipeline

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "feat: your feature description"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request — CI must pass before merge

**Commit Convention:** `feat` / `fix` / `docs` / `refactor` / `test` / `chore`

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">Made with ❤️</p>
