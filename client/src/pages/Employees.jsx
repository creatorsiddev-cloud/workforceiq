import { useEffect, useState } from "react";

import EmployeeHeader from "../components/employees/sections/EmployeeHeader";
import EmployeeSummary from "../components/employees/sections/EmployeeSummary";
import EmployeeToolbar from "../components/employees/sections/EmployeeToolbar";
import EmployeeTable from "../components/employees/components/EmployeeTable";

import { getEmployees } from "../services/employeeService";

import "../components/employees/styles/Employees.css";

function Employees() {
  // ==========================================
  // Employees State
  // ==========================================

  const [employees, setEmployees] = useState([]);

  // ==========================================
  // Search State
  // ==========================================

  const [searchTerm, setSearchTerm] = useState("");

  // ==========================================
  // Department Filter
  // ==========================================

  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  // ==========================================
  // Department List
  // ==========================================

  const departments = ["Engineering", "HR", "Finance", "Marketing", "IT"];

  // ==========================================
  // Status Filter
  // ==========================================

  const statuses = ["Active", "Inactive", "On Leave"];


  const sortOptions = [
  "Newest",
  "Oldest",
  "Name (A-Z)",
  "Name (Z-A)",
  "Salary (Low-High)",
  "Salary (High-Low)",
];
  // ==========================================
  // Sort
  // ==========================================

  const [sortBy, setSortBy] = useState("Newest");

  
  // ==========================================
  // Fetch Employees
  // ==========================================

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================================
  // Search Employees
  // ==========================================
const filteredEmployees = employees.filter((employee) => {

  const fullName =
    `${employee.firstName} ${employee.lastName}`.toLowerCase();

  const matchesSearch =
    fullName.includes(searchTerm.toLowerCase()) ||
    employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDepartment =
    departmentFilter === "All" ||
    employee.department === departmentFilter;

  const matchesStatus =
    statusFilter === "All" ||
    employee.status === statusFilter;

  return (
    matchesSearch &&
    matchesDepartment &&
    matchesStatus
  );

});

const sortedEmployees = [...filteredEmployees];

switch (sortBy) {

  case "Newest":
    sortedEmployees.sort(
      (a, b) => new Date(b.joiningDate) - new Date(a.joiningDate)
    );
    break;

  case "Oldest":
    sortedEmployees.sort(
      (a, b) => new Date(a.joiningDate) - new Date(b.joiningDate)
    );
    break;

  case "Name (A-Z)":
    sortedEmployees.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    break;

  case "Name (Z-A)":
    sortedEmployees.sort((a, b) =>
      b.firstName.localeCompare(a.firstName)
    );
    break;

  case "Salary (Low-High)":
    sortedEmployees.sort(
      (a, b) => Number(a.salary) - Number(b.salary)
    );
    break;

  case "Salary (High-Low)":
    sortedEmployees.sort(
      (a, b) => Number(b.salary) - Number(a.salary)
    );
    break;

  default:
    break;

}

  return (
    <main className="employees-page">
      <EmployeeHeader />

      <EmployeeSummary />

      <EmployeeToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        departments={departments}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        statuses={statuses}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
      />

      <EmployeeTable employees={sortedEmployees} />
    </main>
  );
}

export default Employees;
