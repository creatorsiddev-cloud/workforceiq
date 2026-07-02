import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";

function EmploymentInfo({
  formData,
  handleChange,
  errors,
}) {
  return (
    <section className="form-section">

      <h2>Employment Information</h2>

      <div className="form-grid">

        <TextInput
          label="Employee ID"
          name="employeeId"
          placeholder="EMP001"
          value={formData.employeeId}
          onChange={handleChange}
          error={errors.employeeId}
          required
        />

        <SelectInput
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          options={[
            "Engineering",
            "Human Resources",
            "Finance",
            "Marketing",
            "Sales",
            "Design",
            "Operations",
            "Support",
          ]}
          error={errors.department}
          required
        />

        <TextInput
          label="Position"
          name="position"
          placeholder="Frontend Developer"
          value={formData.position}
          onChange={handleChange}
          error={errors.position}
          required
        />

        <DateInput
          label="Joining Date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          error={errors.joiningDate}
          required
        />

        <SelectInput
          label="Employment Type"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          options={[
            "Full Time",
            "Part Time",
            "Intern",
            "Contract",
            "Freelancer",
          ]}
          error={errors.employmentType}
          required
        />

        <TextInput
          label="Salary"
          name="salary"
          type="number"
          placeholder="50000"
          value={formData.salary}
          onChange={handleChange}
          error={errors.salary}
          required
        />

        <SelectInput
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          options={[
            "Active",
            "On Leave",
            "Inactive",
          ]}
          error={errors.status}
          required
        />

      </div>

    </section>
  );
}

export default EmploymentInfo;