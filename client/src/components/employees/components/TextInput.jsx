import "../styles/Inputs.css";

function TextInput({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
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

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={error ? "input-error" : ""}
      />

      {error && (
        <span className="error-message">
          {error}
        </span>
      )}

    </div>
  );
}

export default TextInput;