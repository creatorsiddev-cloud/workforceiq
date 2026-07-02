import { useNavigate } from "react-router-dom";

import "../styles/DepartmentHeader.css";

function DepartmentHeader() {

  const navigate = useNavigate();

  return (
    <section className="department-header">

      <div className="department-header-left">

        <span className="department-badge">
          Department Management
        </span>

        <h1>Departments</h1>

        <p>
          Manage departments, managers, locations, and organizational structure
          from one centralized workspace.
        </p>

      </div>

      <div className="department-header-right">

        <button
          className="add-department-btn"
          onClick={() => navigate("/departments/add")}
        >
          + Add Department
        </button>

      </div>

    </section>
  );
}

export default DepartmentHeader;