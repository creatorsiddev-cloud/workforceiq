import { FiCalendar } from "react-icons/fi";
import "../styles/Inputs.css";

function DateInput({
  label,
  name,
  value,
  onChange,
  required = false,
  error = "",
}) {
  return (
    <div className="form-group">

      <label htmlFor={name}>
        {label}

        {required && (
          <span className="required">*</span>
        )}
      </label>

      <div className="date-wrapper">

        <input
          id={name}
          name={name}
          type="date"
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />

        <FiCalendar className="date-icon" />

      </div>

      {error && (
        <span className="error-message">
          {error}
        </span>
      )}

    </div>
  );
}

export default DateInput;