import { useNavigate } from "react-router-dom";

function WelcomeSection({

  employees = [],

  departments = [],

}) {

  const navigate = useNavigate();

  const today = new Date();

  const options = {

    weekday: "long",

    day: "numeric",

    month: "long",

    year: "numeric",

  };

  const totalEmployees = employees.length;

  const totalDepartments = departments.length;

  const activeEmployees = employees.filter(

    (employee) => employee.status === "Active"

  ).length;

  const activePercentage =
    totalEmployees === 0
      ? 0
      : Math.round((activeEmployees / totalEmployees) * 100);

  return (

    <section className="welcome-section">

      <div className="welcome-text">

        <h1>
          Welcome back, Admin 👋
        </h1>

        <p>
          Here's an overview of your workforce today.
        </p>

        <span>

          {today.toLocaleDateString("en-US", options)}

        </span>

      </div>

      <div className="hero-stats">

        <div className="hero-stat">

          <h3>{totalEmployees}</h3>

          <span>Employees</span>

        </div>

        <div className="hero-stat">

          <h3>{totalDepartments}</h3>

          <span>Departments</span>

        </div>

        <div className="hero-stat">

          <h3>{activePercentage}%</h3>

          <span>Active</span>

        </div>

      </div>

      <button
        className="add-btn"
        onClick={() => navigate("/employees/add")}
      >

        + Add Employee

      </button>

    </section>

  );

}

export default WelcomeSection;