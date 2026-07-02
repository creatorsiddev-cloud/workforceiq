const express = require("express");

const {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

// Get All Employees
router.get("/", getEmployees);

// Get Employee By ID
router.get("/:id", getEmployeeById);

// Add Employee
router.post("/", addEmployee);

// Update Employee
router.put("/:id", updateEmployee);

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;