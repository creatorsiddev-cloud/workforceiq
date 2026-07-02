import { useNavigate } from "react-router-dom";
import "../styles/EmployeeHeader.css";

function EmployeeHeader() {

  const navigate = useNavigate();

  return (
    <section className="employee-header">

      <div className="employee-header-left">

        <span className="employee-badge">
          Employee Management
        </span>

        <h1>Employees</h1>

        <p>
          Manage employee records, departments, positions and workforce
          information from one centralized workspace.
        </p>

      </div>

      <div className="employee-header-right">

        <button
          className="add-employee-btn"
          onClick={() => navigate("/employees/add")}
        >
          + Add Employee
        </button>

      </div>

    </section>
  );
}

export default EmployeeHeader;