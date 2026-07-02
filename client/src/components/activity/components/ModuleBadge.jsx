import "./ModuleBadge.css";

function ModuleBadge({ module }) {

  return (

    <span className={`module-badge ${module.toLowerCase()}`}>

      {module}

    </span>

  );

}

export default ModuleBadge;