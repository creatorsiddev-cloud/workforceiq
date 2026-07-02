import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

import "./EmployeeRow.css";

function EmployeeRow({ employee }) {
  return (
    <div className="employee-row">

      <div className="employee-column employee-info">

        <img
          src={
            employee.profileImage ||
            "https://ui-avatars.com/api/?name=" +
              `${employee.firstName}+${employee.lastName}`
          }
          alt={`${employee.firstName} ${employee.lastName}`}
          className="employee-avatar"
        />

        <div>

          <h4>
            {employee.firstName} {employee.lastName}
          </h4>

          <p>{employee.employeeId}</p>

        </div>

      </div>

      <div className="employee-column">
        {employee.department}
      </div>

      <div className="employee-column">
        {employee.position}
      </div>

      <div className="employee-column">
        ₹ {employee.salary}
      </div>

      <div className="employee-column">
        <StatusBadge status={employee.status} />
      </div>

      <div className="employee-column">
        <ActionButtons employee={employee} />
      </div>

    </div>
  );
}

export default EmployeeRow;