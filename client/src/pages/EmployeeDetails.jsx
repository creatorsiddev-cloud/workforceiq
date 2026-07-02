import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getEmployeeById } from "../services/employeeService";

import "../components/employees/styles/EmployeeDetails.css";

function EmployeeDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {

    fetchEmployee();

  }, []);

  const fetchEmployee = async () => {

    try {

      const data = await getEmployeeById(id);

      setEmployee(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load employee.");

    }

  };

  if (!employee) {

    return <h2>Loading...</h2>;

  }

  return (

    <main className="employee-details-page">

      {/* Header */}

      <div className="details-header">

        <button
          className="back-btn"
          onClick={() => navigate("/employees")}
        >
          ← Back
        </button>

        <h1>Employee Details</h1>

      </div>

      {/* Profile Card */}

      <div className="profile-card">

        <img
          src={
            employee.profileImage ||
            `https://ui-avatars.com/api/?name=${employee.firstName}+${employee.lastName}`
          }
          alt={employee.firstName}
          className="profile-avatar"
        />

        <div>

          <h2>
            {employee.firstName} {employee.lastName}
          </h2>

          <p>{employee.employeeId}</p>

        </div>

      </div>

      {/* Personal Information */}

      <div className="details-card">

        <h3>Personal Information</h3>

        <p><strong>First Name:</strong> {employee.firstName}</p>

        <p><strong>Last Name:</strong> {employee.lastName}</p>

        <p><strong>Email:</strong> {employee.email}</p>

        <p><strong>Phone:</strong> {employee.phone}</p>

        <p><strong>Gender:</strong> {employee.gender}</p>

        <p><strong>Date of Birth:</strong> {employee.dob}</p>

      </div>

      {/* Employment Information */}

      <div className="details-card">

        <h3>Employment Information</h3>

        <p><strong>Employee ID:</strong> {employee.employeeId}</p>

        <p><strong>Department:</strong> {employee.department}</p>

        <p><strong>Position:</strong> {employee.position}</p>

        <p><strong>Joining Date:</strong> {employee.joiningDate}</p>

        <p><strong>Employment Type:</strong> {employee.employmentType}</p>

        <p><strong>Salary:</strong> ₹ {employee.salary}</p>

        <p><strong>Status:</strong> {employee.status}</p>

      </div>

      {/* Address */}

      <div className="details-card">

        <h3>Address Information</h3>

        <p><strong>Address:</strong> {employee.address}</p>

        <p><strong>City:</strong> {employee.city}</p>

        <p><strong>State:</strong> {employee.state}</p>

        <p><strong>Country:</strong> {employee.country}</p>

        <p><strong>ZIP Code:</strong> {employee.zipCode}</p>

      </div>

      {/* Emergency Contact */}

      <div className="details-card">

        <h3>Emergency Contact</h3>

        <p><strong>Name:</strong> {employee.emergencyName}</p>

        <p><strong>Relationship:</strong> {employee.relationship}</p>

        <p><strong>Phone:</strong> {employee.emergencyPhone}</p>

      </div>

      <div className="details-actions">

        <button
          className="edit-btn-details"
          onClick={() => navigate(`/employees/edit/${employee._id}`)}
        >
          Edit Employee
        </button>

      </div>

    </main>

  );

}

export default EmployeeDetails;