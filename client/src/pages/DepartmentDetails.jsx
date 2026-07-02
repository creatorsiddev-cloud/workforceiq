import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getDepartmentById,
  deleteDepartment,
} from "../services/departmentService";

import "../components/departments/styles/DepartmentDetails.css";

function DepartmentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [department, setDepartment] = useState(null);

  // ==========================================
  // Fetch Department
  // ==========================================

  useEffect(() => {

    fetchDepartment();

  }, []);

  const fetchDepartment = async () => {

    try {

      const data = await getDepartmentById(id);

      setDepartment(data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================================
  // Delete Department
  // ==========================================

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDepartment(id);

      alert("Department Deleted Successfully!");

      navigate("/departments");

    } catch (error) {

      console.error(error);

      alert("Failed to delete department.");

    }

  };

  // ==========================================
  // Loading
  // ==========================================

  if (!department) {

    return (
      <main className="department-details-page">

        <h2>Loading...</h2>

      </main>
    );

  }

  return (

    <main className="department-details-page">

      {/* Header */}

      <div className="details-header">

        <button
          className="back-btn"
          onClick={() => navigate("/departments")}
        >
          ← Back
        </button>

        <div>

          <h1>{department.name}</h1>

          <p>
            Department Details
          </p>

        </div>

      </div>

      {/* Details Card */}

      <div className="details-card">

        <div className="details-item">

          <strong>Department Name</strong>

          <span>{department.name}</span>

        </div>

        <div className="details-item">

          <strong>Manager</strong>

          <span>{department.manager}</span>

        </div>

        <div className="details-item">

          <strong>Location</strong>

          <span>{department.location}</span>

        </div>

        <div className="details-item">

          <strong>Employees</strong>

          <span>{department.employeeCount}</span>

        </div>

        <div className="details-item">

          <strong>Status</strong>

          <span>{department.status}</span>

        </div>

        <div className="details-item">

          <strong>Description</strong>

          <span>
            {department.description || "No description available."}
          </span>

        </div>

        <div className="details-item">

          <strong>Created At</strong>

          <span>
            {new Date(department.createdAt).toLocaleDateString()}
          </span>

        </div>

        <div className="details-item">

          <strong>Last Updated</strong>

          <span>
            {new Date(department.updatedAt).toLocaleDateString()}
          </span>

        </div>

      </div>

      {/* Actions */}

      <div className="details-actions">

        <button
          className="edit-btn"
          onClick={() =>
            navigate(`/departments/edit/${department._id}`)
          }
        >
          Edit Department
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete Department
        </button>

      </div>

    </main>

  );

}

export default DepartmentDetails;