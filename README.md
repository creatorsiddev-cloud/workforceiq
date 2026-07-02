# WorkforceIQ

A modern MERN Stack Employee & Department Management System built with React, Node.js, Express, and MongoDB.

---

## Overview

WorkforceIQ is a workforce management application that allows administrators to manage employees, departments, activity logs, and profile settings from a centralized dashboard.

This project was built to demonstrate a complete MERN application with authentication, CRUD operations, routing, and a clean dashboard UI.

---

## Features

- Secure Admin Login (JWT Authentication)
- Protected Routes
- Employee Management (CRUD)
- Department Management (CRUD)
- Activity Logs
- Dashboard Overview
- Profile Management
- Settings Module
- Landing Page
- Responsive Layout (Desktop-first)

---

## Tech Stack

### Frontend

- React
- React Router
- Axios
- React Icons
- Chart.js
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## Folder Structure

```
client/
    src/
    assets/
    components/
    services/

backend/
    config/
    controllers/
    middleware/
    models/
    routes/
```

---

## Installation

### Clone

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Backend

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

Frontend

```
VITE_API_URL=http://localhost:5000/api
```

---

## Demo Credentials

```
Email:
admin@workforceiq.com

Password:
********
```

---

## Future Improvements

- Improved responsive dashboard
- Pagination
- Search optimization
- Dark Mode
- Role Based Access Control
- Notifications

---

## Note

This project is currently optimized for **desktop and laptop screens**.

The dashboard layout is **not fully responsive** for mobile devices in this version (V1). Future versions will include a mobile-first responsive redesign.

---

## Author

**Siddhant Apankar**

Built for learning, portfolio, and MERN stack practice.