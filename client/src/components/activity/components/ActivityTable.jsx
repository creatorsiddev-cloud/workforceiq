import ActivityRow from "./ActivityRow";

import "./ActivityTable.css";

function ActivityTable({ activities }) {

  return (

    <div className="activity-table-container">

      <table className="activity-table">

        <thead>

          <tr>

            <th>Time</th>

            <th>Module</th>

            <th>Action</th>

            <th>Message</th>

          </tr>

        </thead>

        <tbody>

          {activities.length === 0 ? (

            <tr>

              <td
                colSpan="4"
                className="empty-table"
              >

                No activity found.

              </td>

            </tr>

          ) : (

            activities.map((activity) => (

              <ActivityRow

                key={activity._id}

                activity={activity}

              />

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default ActivityTable;