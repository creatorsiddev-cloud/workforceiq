import {
  FiGrid,
  FiCheckCircle,
  FiXCircle,
  FiUsers,
} from "react-icons/fi";

import "../styles/DepartmentSummary.css";

function DepartmentSummary({ departments }) {

  const totalDepartments = departments.length;

  const activeDepartments = departments.filter(
    (department) => department.status === "Active"
  ).length;

  const inactiveDepartments = departments.filter(
    (department) => department.status === "Inactive"
  ).length;

  const totalEmployees = departments.reduce(
    (total, department) => total + department.employeeCount,
    0
  );

  const summaryCards = [
    {
      title: "Total Departments",
      value: totalDepartments,
      icon: <FiGrid />,
    },
    {
      title: "Active",
      value: activeDepartments,
      icon: <FiCheckCircle />,
    },
    {
      title: "Inactive",
      value: inactiveDepartments,
      icon: <FiXCircle />,
    },
    {
      title: "Employees",
      value: totalEmployees,
      icon: <FiUsers />,
    },
  ];

  return (
    <section className="department-summary">

      {summaryCards.map((card) => (

        <div
          key={card.title}
          className="summary-card"
        >

          <div className="summary-icon">
            {card.icon}
          </div>

          <div className="summary-content">

            <p>{card.title}</p>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </section>
  );
}

export default DepartmentSummary;