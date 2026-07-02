import "./EmployeeRow.css";
function EmployeeRow({ employee }) {
  return (
    <div className="employee-row">

      <div className="employee-info">

        <img
          src={`https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}&background=random`}
          alt={`${employee.firstName} ${employee.lastName}`}
          className="employee-avatar"
        />

        <div>

          <h4>
            {employee.firstName} {employee.lastName}
          </h4>

          <p>{employee.position}</p>

        </div>

      </div>

      <div className="employee-department">

        {employee.department}

      </div>

      <div
        className={`employee-status ${employee.status
          .toLowerCase()
          .replace(" ", "-")}`}
      >

        {employee.status}

      </div>

    </div>
  );
}

export default EmployeeRow;