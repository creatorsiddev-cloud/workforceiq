import { useState } from "react";
import { addEmployee } from "../services/employeeService";

import Stepper from "../components/employees/sections/Stepper";
import PersonalInfo from "../components/employees/sections/PersonalInfo";
import EmploymentInfo from "../components/employees/sections/EmploymentInfo";
import AddressInfo from "../components/employees/sections/AddressInfo";
import ReviewSubmit from "../components/employees/sections/ReviewSubmit";

import "../components/employees/styles/AddEmployee.css";

function AddEmployee() {
  // ==========================================
  // Current Step
  // ==========================================

  const [currentStep, setCurrentStep] = useState(1);

  // ==========================================
  // Employee Form Data
  // ==========================================

  const [formData, setFormData] = useState({
    // Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    profileImage: null,

    // Employment
    employeeId: "",
    department: "",
    position: "",
    joiningDate: "",
    employmentType: "",
    salary: "",
    status: "",

    // Address
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",

    // Emergency Contact
    emergencyName: "",
    relationship: "",
    emergencyPhone: "",
  });

  // ==========================================
  // Validation Errors
  // ==========================================

  const [errors, setErrors] = useState({});

  // ==========================================
  // Handle Input Change
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // Handle Image Upload
  // ==========================================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  // ==========================================
  // Validation
  // ==========================================

  const validateStep = () => {
    let newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";

      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";

      if (!formData.email.trim())
        newErrors.email = "Email is required";

      if (!formData.phone.trim())
        newErrors.phone = "Phone number is required";

      if (!formData.gender)
        newErrors.gender = "Gender is required";

      if (!formData.dob)
        newErrors.dob = "Date of birth is required";
    }

    if (currentStep === 2) {
      if (!formData.employeeId.trim())
        newErrors.employeeId = "Employee ID is required";

      if (!formData.department)
        newErrors.department = "Department is required";

      if (!formData.position.trim())
        newErrors.position = "Position is required";

      if (!formData.joiningDate)
        newErrors.joiningDate = "Joining date is required";

      if (!formData.employmentType)
        newErrors.employmentType = "Employment type is required";

      if (!formData.salary)
        newErrors.salary = "Salary is required";

      if (!formData.status)
        newErrors.status = "Status is required";
    }

    if (currentStep === 3) {
      if (!formData.address.trim())
        newErrors.address = "Address is required";

      if (!formData.city.trim())
        newErrors.city = "City is required";

      if (!formData.state.trim())
        newErrors.state = "State is required";

      if (!formData.country.trim())
        newErrors.country = "Country is required";

      if (!formData.zipCode.trim())
        newErrors.zipCode = "ZIP Code is required";

      if (!formData.emergencyName.trim())
        newErrors.emergencyName = "Contact name is required";

      if (!formData.relationship.trim())
        newErrors.relationship = "Relationship is required";

      if (!formData.emergencyPhone.trim())
        newErrors.emergencyPhone = "Emergency phone is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // Navigation
  // ==========================================

  const nextStep = () => {
    if (!validateStep()) return;

    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async () => {
    try {
      await addEmployee(formData);

      alert("Employee Added Successfully!");

      console.log("Employee Saved");
    } catch (error) {
      console.error(error);
      alert("Failed to add employee");
    }
  };

  // ==========================================
  // Render Current Step
  // ==========================================

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            errors={errors}
          />
        );

      case 2:
        return (
          <EmploymentInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );

      case 3:
        return (
          <AddressInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );

      case 4:
        return <ReviewSubmit formData={formData} />;

      default:
        return null;
    }
  };
    return (
    <main className="add-employee-page">

      {/* Header */}

      <div className="wizard-header">

        <button
          type="button"
          className="back-btn"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>

        <div>

          <h1>Add Employee</h1>

          <p>
            Fill in the employee information to create a new employee profile.
          </p>

        </div>

      </div>

      {/* Stepper */}

      <Stepper currentStep={currentStep} />

      {/* Form */}

      <div className="wizard-card">

        {renderStep()}

      </div>

      {/* Footer */}

      <div className="wizard-footer">

        <button
          type="button"
          className="previous-btn"
          onClick={previousStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>

        {currentStep === 4 ? (

          <button
            type="button"
            className="next-btn"
            onClick={handleSubmit}
          >
            Save Employee
          </button>

        ) : (

          <button
            type="button"
            className="next-btn"
            onClick={nextStep}
          >
            Next
          </button>

        )}

      </div>

    </main>
  );
}

export default AddEmployee;