const Employee = require("../models/Employee");
const Activity = require("../models/Activity");
// =============================
// Get All Employees
// =============================

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =============================
// Get Employee By ID
// =============================

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =============================
// Add Employee
// =============================

const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

await Activity.create({
  module: "Employee",
  action: "Added",
  message: `${employee.firstName} ${employee.lastName} was added.`,
});

res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =============================
// Update Employee
// =============================

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }


    await Activity.create({
  module: "Employee",
  action: "Updated",
  message: `${employee.firstName} ${employee.lastName}'s profile was updated.`,
});
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =============================
// Delete Employee
// =============================

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    await Activity.create({
  module: "Employee",
  action: "Deleted",
  message: `${employee.firstName} ${employee.lastName} was deleted.`,
});
    res.status(200).json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};