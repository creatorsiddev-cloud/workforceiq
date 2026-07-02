const Department = require("../models/Department");
const Activity = require("../models/Activity");
// ==========================================
// Get All Departments
// ==========================================

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().sort({ createdAt: -1 });

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch departments.",
      error: error.message,
    });
  }
};

// ==========================================
// Get Single Department
// ==========================================

const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        message: "Department not found.",
      });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch department.",
      error: error.message,
    });
  }
};

// ==========================================
// Create Department
// ==========================================

const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

await Activity.create({
  module: "Department",
  action: "Added",
  message: `${department.name} department was created.`,
});

res.status(201).json(department);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create department.",
      error: error.message,
    });
  }
};

// ==========================================
// Update Department
// ==========================================

const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!department) {
      return res.status(404).json({
        message: "Department not found.",
      });
    }
await Activity.create({
  module: "Department",
  action: "Updated",
  message: `${department.name} department was updated.`,
});
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update department.",
      error: error.message,
    });
  }
};

// ==========================================
// Delete Department
// ==========================================

const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);

    if (!department) {
      return res.status(404).json({
        message: "Department not found.",
      });
    }

   await Activity.create({
  module: "Department",
  action: "Deleted",
  message: `${department.name} department was deleted.`,
});

    res.status(200).json({
      message: "Department deleted successfully.",
    });

 

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete department.",
      error: error.message,
    });
  }
};

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};