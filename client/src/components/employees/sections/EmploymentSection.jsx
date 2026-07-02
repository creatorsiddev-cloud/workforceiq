import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";

function EmploymentInfo() {
  return (
    <section>

      <h2>Employment Information</h2>

      <div className="form-grid">

        <TextInput
          label="Employee ID"
          placeholder="EMP001"
        />

        <SelectInput
          label="Department"
          options={[
            "Engineering",
            "Human Resources",
            "Finance",
            "Sales",
            "Marketing",
            "Design",
          ]}
        />

        <TextInput
          label="Position"
          placeholder="Frontend Developer"
        />

        <DateInput
          label="Joining Date"
        />

        <SelectInput
          label="Employment Type"
          options={[
            "Full Time",
            "Part Time",
            "Intern",
            "Contract",
          ]}
        />

        <TextInput
          label="Salary"
          type="number"
          placeholder="50000"
        />

        <SelectInput
          label="Status"
          options={[
            "Active",
            "On Leave",
            "Inactive",
          ]}
        />

      </div>

    </section>
  );
}

export default EmploymentInfo;