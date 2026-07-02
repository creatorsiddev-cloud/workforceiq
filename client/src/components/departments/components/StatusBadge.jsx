import "../styles/StatusBadge.css";

function StatusBadge({ status }) {

  const badgeClass =
    status === "Active"
      ? "status-badge active"
      : "status-badge inactive";

  return (
    <span className={badgeClass}>
      {status}
    </span>
  );

}

export default StatusBadge;