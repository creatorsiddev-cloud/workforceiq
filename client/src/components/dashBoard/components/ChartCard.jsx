import "./StatCard.css";
import "./ChartCard.css";
function ChartCard({ title, subtitle, children }) {
  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>

      </div>

      <div className="chart-body">
        {children}
      </div>

    </div>
  );
}

export default ChartCard;