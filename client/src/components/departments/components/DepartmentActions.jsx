import { useNavigate } from "react-router-dom";

import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import { deleteDepartment } from "../../../services/departmentService";

import "../styles/DepartmentActions.css";

function DepartmentActions({ department }) {

  const navigate = useNavigate();

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDepartment(department._id);

      alert("Department deleted successfully.");

      window.location.reload();

    } catch (error) {

      console.error(error);

      alert("Failed to delete department.");

    }

  };

  return (

    <div className="department-actions">

      <button
        className="view-btn"
        onClick={() =>
          navigate(`/departments/${department._id}`)
        }
      >
        <FiEye />
      </button>

      <button
        className="edit-btn-department"
        onClick={() =>
          navigate(`/departments/edit/${department._id}`)
        }
      >
        <FiEdit2 />
      </button>

      <button
        className="delete-btn-department"
        onClick={handleDelete}
      >
        <FiTrash2 />
      </button>

    </div>

  );

}

export default DepartmentActions;