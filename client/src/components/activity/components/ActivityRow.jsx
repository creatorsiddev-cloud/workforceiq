import ActionBadge from "./ActionBadge";
import ModuleBadge from "./ModuleBadge";

import "./ActivityRow.css";

function ActivityRow({ activity }) {

  return (

    <tr>

      <td>

        {new Date(activity.createdAt).toLocaleString()}

      </td>

      <td>

        <ModuleBadge
          module={activity.module}
        />

      </td>

      <td>

        <ActionBadge
          action={activity.action}
        />

      </td>

      <td>

        {activity.message}

      </td>

    </tr>

  );

}

export default ActivityRow;