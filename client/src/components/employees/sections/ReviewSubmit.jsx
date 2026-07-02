import "../styles/AddEmployee.css";

function ReviewSubmit({ formData }) {
  return (
    <section className="form-section">

      <h2>Review & Submit</h2>

      <div className="review-card">

        {/* Personal Information */}

        <div className="review-group">

          <h3>Personal Information</h3>

          <div className="review-grid">

            <div className="review-item">
              <span>First Name</span>
              <strong>{formData.firstName || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Last Name</span>
              <strong>{formData.lastName || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Email</span>
              <strong>{formData.email || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Phone</span>
              <strong>{formData.phone || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Gender</span>
              <strong>{formData.gender || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Date of Birth</span>
              <strong>{formData.dob || "-"}</strong>
            </div>

          </div>

        </div>

        <div className="section-divider"></div>

        {/* Employment */}

        <div className="review-group">

          <h3>Employment Information</h3>

          <div className="review-grid">

            <div className="review-item">
              <span>Employee ID</span>
              <strong>{formData.employeeId || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Department</span>
              <strong>{formData.department || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Position</span>
              <strong>{formData.position || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Joining Date</span>
              <strong>{formData.joiningDate || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Employment Type</span>
              <strong>{formData.employmentType || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Salary</span>
              <strong>₹ {formData.salary || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Status</span>
              <strong>{formData.status || "-"}</strong>
            </div>

          </div>

        </div>

        <div className="section-divider"></div>

        {/* Address */}

        <div className="review-group">

          <h3>Address Information</h3>

          <div className="review-grid">

            <div className="review-item">
              <span>Address</span>
              <strong>{formData.address || "-"}</strong>
            </div>

            <div className="review-item">
              <span>City</span>
              <strong>{formData.city || "-"}</strong>
            </div>

            <div className="review-item">
              <span>State</span>
              <strong>{formData.state || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Country</span>
              <strong>{formData.country || "-"}</strong>
            </div>

            <div className="review-item">
              <span>ZIP Code</span>
              <strong>{formData.zipCode || "-"}</strong>
            </div>

          </div>

        </div>

        <div className="section-divider"></div>

        {/* Emergency */}

        <div className="review-group">

          <h3>Emergency Contact</h3>

          <div className="review-grid">

            <div className="review-item">
              <span>Contact Name</span>
              <strong>{formData.emergencyName || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Relationship</span>
              <strong>{formData.relationship || "-"}</strong>
            </div>

            <div className="review-item">
              <span>Emergency Phone</span>
              <strong>{formData.emergencyPhone || "-"}</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ReviewSubmit;