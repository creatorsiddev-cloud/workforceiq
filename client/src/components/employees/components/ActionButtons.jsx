import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { deleteEmployee } from "../../../services/employeeService";

import "./ActionButtons.css";

function ActionButtons({ employee }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Delete ${employee.firstName} ${employee.lastName}?`,
    );

    if (!confirmDelete) return;

    try {
      await deleteEmployee(employee._id);

      alert("Employee deleted successfully.");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to delete employee.");
    }
  };

  return (
    <div className="action-buttons">
      <button
        className="view-btn"
        onClick={() => navigate(`/employees/${employee._id}`)}
      >
        <FiEye />
      </button>

      <button
        className="edit-btn-employee"
        onClick={() => navigate(`/employees/edit/${employee._id}`)}
      >
        <FiEdit2 />
      </button>

      <button className="delete-btn-employee" onClick={handleDelete}>
        <FiTrash2 />
      </button>
    </div>
  );
}

export default ActionButtons;
