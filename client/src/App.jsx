import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./components/dashBoard/Dashboard";

import Activity from "./components/activity/pages/ActivityLogs";
import Profile from "./components/profile/pages/Profile";
import Settings from "./components/settings/pages/Settings";

import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";

import Departments from "./pages/Departments";
import AddDepartment from "./pages/AddDepartment";
import EditDepartment from "./pages/EditDepartment";
import DepartmentDetails from "./pages/DepartmentDetails";

import Landing from "./components/landing/pages/Landing";
import Login from "./components/auth/pages/Login";

import PublicRoute from "./components/routes/PublicRoute";
import ProtectedRoute from "./components/routes/ProtectedRoute";

import "./styles/layout.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==========================
        Public Routes
    ========================== */}

        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* ==========================
        Dashboard Routes
    ========================== */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/employees/add" element={<AddEmployee />} />

          <Route path="/employees/:id" element={<EmployeeDetails />} />

          <Route path="/employees/edit/:id" element={<EditEmployee />} />

          <Route path="/departments" element={<Departments />} />

          <Route path="/departments/add" element={<AddDepartment />} />

          <Route path="/departments/edit/:id" element={<EditDepartment />} />

          <Route path="/departments/:id" element={<DepartmentDetails />} />

          <Route path="/activity" element={<Activity />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* ==========================
        Invalid Route
    ========================== */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
