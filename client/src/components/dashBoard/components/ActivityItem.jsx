

const activityIcons = {

  add: "➕",

  edit: "✏️",

  delete: "🗑",

  employee: "👤",

  department: "🏢",

  analytics: "📊",

  login: "🔐",

};

function ActivityItem({

  type,

  title,

  time,

}) {

  return (

    <div className="activity-item">

      <div className="activity-icon">

        {activityIcons[type] || "✓"}

      </div>

      <div className="activity-content">

        <h4>{title}</h4>

        <p>{time}</p>

      </div>

    </div>

  );

}

export default ActivityItem;