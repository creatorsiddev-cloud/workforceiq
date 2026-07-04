# WorkforceIQ

A modern Employee & Department Management System built using the MERN Stack. WorkforceIQ helps organizations manage employees, departments, activity logs, administrator settings, and authentication through a clean and intuitive dashboard.

> ⚠️ **Note:** The current version is optimized for desktop devices. Full responsive support for tablets and mobile devices is planned in a future update.

---

## Live Demo

**Frontend:** https://workforceiq-7rgb.vercel.app/

**Backend:** https://workforceiq-5.onrender.com

---

## Demo Credentials

Email:
admin@workforceiq.com

Password:
admin123

---

## Features

### Authentication
- Secure Admin Login using JWT
- Protected Routes
- Public Landing Page
- Logout Functionality

### Dashboard
- Dashboard Overview
- Employee Statistics
- Department Statistics
- Activity Overview
- Search Bar
- Administrator Profile

### Employee Management
- View Employees
- Add Employee
- Edit Employee
- Delete Employee
- Employee Details
- Search Employees

### Department Management
- View Departments
- Add Department
- Edit Department
- Delete Department
- Department Details

### Activity Logs
- Employee Activities
- Department Activities
- Timestamp Tracking

### Profile
- View Administrator Profile
- Update Personal Information

### Settings
- Appearance Settings
- Notification Settings
- Security Settings
- System Settings

### Landing Page
- Professional Landing Page
- Login Navigation

---

## Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Axios
- React Icons
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Morgan

---

## Folder Structure

```
WorkforceIQ
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── seedAdmin.js
│   ├── server.js
│   └── package.json
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/creatorsiddev-cloud/workforceiq.git

cd workforceiq
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## Production Environment Variables

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=https://your-vercel-app.vercel.app
```

### Frontend

```env
VITE_API_URL=https://your-render-backend-url.onrender.com/api
```

---

## API Routes

### Authentication

```
POST /api/auth/login
```

### Employees

```
GET    /api/employees
POST   /api/employees
PUT    /api/employees/:id
DELETE /api/employees/:id
GET    /api/employees/:id
```

### Departments

```
GET    /api/departments
POST   /api/departments
PUT    /api/departments/:id
DELETE /api/departments/:id
GET    /api/departments/:id
```

### Activities

```
GET /api/activities
```

---

## Screenshots

Add screenshots of:

- Landing Page
- <img width="1311" height="573" alt="image" src="https://github.com/user-attachments/assets/193c5914-935d-48ae-817c-b1039793fa32" />


- Login Page
- <img width="1296" height="610" alt="image" src="https://github.com/user-attachments/assets/195e3ebc-f5f3-495f-9002-a7c09458cd00" />

- Dashboard
- <img width="1307" height="639" alt="image" src="https://github.com/user-attachments/assets/12f9255b-fadb-4f1b-aded-5bc2d8f127bc" />

- Employees
- <img width="1315" height="592" alt="image" src="https://github.com/user-attachments/assets/3d76ee1c-22e4-4ced-8d57-a7d5cd81a81a" />
- <img width="1307" height="608" alt="image" src="https://github.com/user-attachments/assets/cea9d347-8b85-46ba-8fc8-7b88b82d7b7e" />

- Departments
- <img width="1315" height="608" alt="image" src="https://github.com/user-attachments/assets/c929cb0f-4bc3-4ee0-bc65-dde1cad74f1e" />
- <img width="1311" height="625" alt="image" src="https://github.com/user-attachments/assets/ddb44604-d9c9-4b7b-bba4-9e131830ec92" />

- Activity Logs
- <img width="1313" height="594" alt="image" src="https://github.com/user-attachments/assets/a05e34b1-3523-45dd-99b2-5f2c38e50e37" />

- Profile
- <img width="1311" height="608" alt="image" src="https://github.com/user-attachments/assets/9e6fd340-9dac-4220-aa59-34782f4dea32" />
- <img width="1309" height="625" alt="image" src="https://github.com/user-attachments/assets/be734a02-4013-49bb-bda3-4cbd4789efc4" />

- Settings
- <img width="1309" height="626" alt="image" src="https://github.com/user-attachments/assets/02e9b6a1-eb29-47a4-9725-637d949fa0c2" />

---

## Future Improvements

- Mobile & Tablet Responsive Design
- Dashboard Analytics
- Export Employee Data
- Pagination
- Dark Mode
- Role-Based Access Control
- Profile Image Upload
- Email Notifications
- Advanced Search & Filters
- Attendance Management

---

## Known Limitations

- Responsive design is not fully implemented.
- Only Administrator login is supported.
- Employee profile image upload is not available.
- Notifications are placeholder UI.
- Analytics charts use basic implementation.

---

## Author

**Siddhant Apankar**

GitHub:
https://github.com/creatorsiddev-cloud

LinkedIn:
*(Add your LinkedIn profile here)*

---

## License

This project is developed for learning and portfolio purposes.
