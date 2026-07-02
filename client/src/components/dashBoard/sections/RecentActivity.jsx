import { useEffect, useState } from "react";

import ActivityItem from "../components/ActivityItem";

import { getActivities } from "../../../services/activityService";

import "./RecentActivity.css";

function RecentActivity() {

  // ==========================================
  // Activities State
  // ==========================================

  const [activities, setActivities] = useState([]);

  // ==========================================
  // Fetch Activities
  // ==========================================

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================================
  // View Logs
  // ==========================================

  const handleViewLogs = () => {

    alert(
      "🚧 Activity Logs module is under development.\nComing Soon!"
    );

  };

  return (
    <section className="recent-activity">
      <div className="section-header">
        <h3>Recent Activity</h3>

        <button onClick={handleViewLogs}>View Logs</button>
      </div>

      {activities.length === 0 ? (
        <p className="empty-state">No recent activity.</p>
      ) : (
        activities
          .slice(0, 5)
          .map((activity) => (
            <ActivityItem
              key={activity._id}
              type={activity.action.toLowerCase()}
              title={activity.message}
              time={new Date(activity.createdAt).toLocaleString()}
            />
          ))
      )}
    </section>
  );
}

export default RecentActivity;
