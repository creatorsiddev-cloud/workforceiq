import DepartmentRow from "./DepartmentRow";

import "../styles/DepartmentTable.css";

function DepartmentTable({ departments }) {

  if (departments.length === 0) {

    return (

      <div className="empty-table">

        <h3>No Departments Found</h3>

        <p>
          Start by creating your first department.
        </p>

      </div>

    );

  }

  return (

    <div className="department-table">

      {/* Table Header */}

      <div className="table-header">

        <span>Department</span>

        <span>Manager</span>

        <span>Employees</span>

        <span>Location</span>

        <span>Status</span>

        <span>Actions</span>

      </div>

      {/* Table Body */}

      {departments.map((department) => (

        <DepartmentRow
          key={department._id}
          department={department}
        />

      ))}

    </div>

  );

}

export default DepartmentTable;