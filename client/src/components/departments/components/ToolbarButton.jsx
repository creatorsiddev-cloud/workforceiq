import "./ToolbarButton.css";

function ToolbarButton({
  icon,
  text,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="toolbar-btn"
      onClick={onClick}
    >
      <span className="toolbar-btn-icon">
        {icon}
      </span>

      <span className="toolbar-btn-text">
        {text}
      </span>
    </button>
  );
}

export default ToolbarButton;