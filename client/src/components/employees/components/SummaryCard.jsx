import "./SummaryCard.css";

function SummaryCard({ title, value, change, icon }) {
  return (
    <div className="summary-card">

      <div className="summary-icon">
        {icon}
      </div>

      <div className="summary-content">

        <span>{title}</span>

        <h2>{value}</h2>

        <p>{change}</p>

      </div>

    </div>
  );
}

export default SummaryCard;