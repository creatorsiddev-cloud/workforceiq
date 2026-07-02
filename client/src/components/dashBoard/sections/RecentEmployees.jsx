import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeRow from "../components/EmployeeRow";

import { getEmployees } from "../../../services/employeeService";

import "./RecentEmployees.css";

function RecentEmployees() {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const data = await getEmployees();

      setEmployees(data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <section className="recent-employees">

      <div className="section-header">

        <h3>Recent Employees</h3>

        <button
          onClick={() => navigate("/employees")}
        >
          View All
        </button>

      </div>

      {employees.length === 0 ? (

        <p className="empty-state">
          No employees found.
        </p>

      ) : (

        employees
          .slice(0, 5)
          .map((employee) => (

            <EmployeeRow
              key={employee._id}
              employee={employee}
            />

          ))

      )}

    </section>

  );

}

export default RecentEmployees;