import { Link } from "react-router-dom";

import "./ActivityHeader.css";

function ActivityHeader() {

  return (

    <section className="activity-header">

      <div>

        <h1>Activity Logs</h1>

        <p>
          Monitor employee and department activities.
        </p>

      </div>

      <Link
        to="/dashboard"
        className="back-dashboard-btn"
      >
        Back to Dashboard
      </Link>

    </section>

  );

}

export default ActivityHeader;