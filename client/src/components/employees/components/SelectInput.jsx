import { FiChevronDown } from "react-icons/fi";
import "../styles/Inputs.css";

function SelectInput({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
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

      <div className="select-wrapper">

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={error ? "input-error" : ""}
        >

          <option value="">
            Select {label}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}

        </select>

        <FiChevronDown className="select-icon" />

      </div>

      {error && (
        <span className="error-message">
          {error}
        </span>
      )}

    </div>
  );
}

export default SelectInput;