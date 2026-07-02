import StatusBadge from "./StatusBadge";
import DepartmentActions from "./DepartmentActions";

import "../styles/DepartmentRow.css";

function DepartmentRow({ department }) {

  return (

    <div className="department-row">

      {/* Department */}

      <div className="department-column department-info">

        <div className="department-icon">

          {department.name.charAt(0).toUpperCase()}

        </div>

        <div>

          <h4>{department.name}</h4>

          <p>{department.description}</p>

        </div>

      </div>

      {/* Manager */}

      <div className="department-column manager-info">

        <div className="manager-avatar">

          {department.manager.charAt(0).toUpperCase()}

        </div>

        <span>{department.manager}</span>

      </div>

      {/* Employees */}

      <div className="department-column">

        <span className="employee-count">

          {department.employeeCount}

        </span>

      </div>

      {/* Location */}

      <div className="department-column">

        {department.location}

      </div>

      {/* Status */}

      <div className="department-column">

        <StatusBadge status={department.status} />

      </div>

      {/* Actions */}

      <div className="department-column">

        <DepartmentActions
          department={department}
        />

      </div>

    </div>

  );

}

export default DepartmentRow;