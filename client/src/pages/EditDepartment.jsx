import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getDepartmentById,
  updateDepartment,
} from "../services/departmentService";

import "../components/departments/styles/AddDepartment.css";

function EditDepartment() {

  const { id } = useParams();

  const navigate = useNavigate();
    // ==========================================
  // Errors
  // ==========================================

  const [errors, setErrors] = useState({});

  // ==========================================
  // Form Data
  // ==========================================

  const [formData, setFormData] = useState({

    name: "",

    manager: "",

    location: "",

    employeeCount: 0,

    status: "Active",

    description: "",

  });

    // ==========================================
  // Fetch Department
  // ==========================================

  useEffect(() => {

    fetchDepartment();

  }, []);

  const fetchDepartment = async () => {

    try {

      const data = await getDepartmentById(id);

      setFormData(data);

    } catch (error) {

      console.error(error);

    }

  };

    // ==========================================
  // Handle Change
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };

    // ==========================================
  // Validation
  // ==========================================

  const validateForm = () => {

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Department name is required.";
    }

    if (!formData.manager.trim()) {
      newErrors.manager = "Manager is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

    // ==========================================
  // Update Department
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    try {

      await updateDepartment(id, formData);

      alert("Department Updated Successfully!");

      navigate("/departments");

    } catch (error) {

      console.error(error);

      alert("Failed to update department.");

    }

  };

    return (

    <main className="add-department-page">

      <div className="department-form-card">

        <div className="form-header">

          <button
            className="back-btn"
            onClick={() => navigate("/departments")}
          >
            ← Back
          </button>

          <div>

            <h1>Edit Department</h1>

            <p>
              Update department information.
            </p>

          </div>

        </div>

        <form
          className="department-form"
          onSubmit={handleSubmit}
        >

          {/* Department Name */}

          <div className="form-group">

            <label>Department Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span>{errors.name}</span>
            )}

          </div>

          {/* Manager */}

          <div className="form-group">

            <label>Manager</label>

            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
            />

            {errors.manager && (
              <span>{errors.manager}</span>
            )}

          </div>

          {/* Location */}

          <div className="form-group">

            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />

            {errors.location && (
              <span>{errors.location}</span>
            )}

          </div>

          {/* Employee Count */}

          <div className="form-group">

            <label>Employee Count</label>

            <input
              type="number"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
            />

          </div>

          {/* Status */}

          <div className="form-group">

            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>

          </div>

          {/* Description */}

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="save-btn"
          >
            Update Department
          </button>

        </form>

      </div>

    </main>

  );

}

export default EditDepartment;