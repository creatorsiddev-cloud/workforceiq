import "./ToolbarButton.css";

function ToolbarButton({ icon, text }) {
  return (
    <button className="toolbar-btn">

      {icon}

      <span>{text}</span>

    </button>
  );
}

export default ToolbarButton;