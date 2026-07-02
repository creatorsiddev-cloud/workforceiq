import { useEffect, useState } from "react";

import DepartmentHeader from "../components/departments/sections/DepartmentHeader";
import DepartmentSummary from "../components/departments/sections/DepartmentSummary";
import DepartmentToolbar from "../components/departments/sections/DepartmentToolbar";
import DepartmentTable from "../components/departments/components/DepartmentTable";

import { getDepartments } from "../services/departmentService";

import "../components/departments/styles/Departments.css";

function Departments() {
  // ==========================================
  // Departments State
  // ==========================================

  const [departments, setDepartments] = useState([]);

  // ==========================================
  // Search State
  // ==========================================

  const [searchTerm, setSearchTerm] = useState("");

  // ==========================================
  // Status Filter
  // ==========================================

  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const statuses = ["Active", "Inactive"];

  const sortOptions = [
    "Newest",
    "Oldest",
    "Department (A-Z)",
    "Department (Z-A)",
    "Employee Count (Low-High)",
    "Employee Count (High-Low)",
  ];

  // ==========================================
  // Fetch Departments
  // ==========================================

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const data = await getDepartments();

      setDepartments(data);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================================
  // Search Departments
  // ==========================================

  const filteredDepartments = departments.filter((department) => {
    const matchesSearch =
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || department.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ==========================================
  // Sort Departments
  // ==========================================

  const sortedDepartments = [...filteredDepartments];

  switch (sortBy) {
    case "Newest":
      sortedDepartments.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      break;

    case "Oldest":
      sortedDepartments.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      );

      break;

    case "Department (A-Z)":
      sortedDepartments.sort((a, b) => a.name.localeCompare(b.name));

      break;

    case "Department (Z-A)":
      sortedDepartments.sort((a, b) => b.name.localeCompare(a.name));

      break;

    case "Employee Count (Low-High)":
      sortedDepartments.sort((a, b) => a.employeeCount - b.employeeCount);

      break;

    case "Employee Count (High-Low)":
      sortedDepartments.sort((a, b) => b.employeeCount - a.employeeCount);

      break;

    default:
      break;
  }

  return (
    <main className="departments-page">
      <DepartmentHeader />

      <DepartmentSummary departments={departments} />

      <DepartmentToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        statuses={statuses}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
        fetchDepartments={fetchDepartments}
        departments={sortedDepartments}
      />

      <DepartmentTable departments={sortedDepartments} />
    </main>
  );
}

export default Departments;
