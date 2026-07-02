import "./ActionBadge.css";

function ActionBadge({ action }) {

  return (

    <span className={`action-badge ${action.toLowerCase()}`}>

      {action}

    </span>

  );

}

export default ActionBadge;