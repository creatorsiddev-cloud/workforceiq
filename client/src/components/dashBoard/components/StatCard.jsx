import "./StatCard.css";

function StatCard({

  title,

  value,

  change,

  icon,

}) {

  return (

    <div className="stat-card">

      <div className="stat-icon">

        {icon}

      </div>

      <div className="stat-content">

        <h4>{title}</h4>

        <h2>{value}</h2>

        <p>{change}</p>

      </div>

    </div>

  );

}

export default StatCard;