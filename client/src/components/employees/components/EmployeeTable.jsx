import "./EmployeeTable.css";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees }) {
  return (
    <div className="employee-table">

      <div className="table-header">

        <span>Employee</span>
        <span>Department</span>
        <span>Position</span>
        <span>Salary</span>
        <span>Status</span>
        <span>Actions</span>

      </div>

      {employees.map((employee) => (
        <EmployeeRow
          key={employee._id}
          employee={employee}
        />
      ))}

    </div>
  );
}

export default EmployeeTable;