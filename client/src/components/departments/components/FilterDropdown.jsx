import { FiChevronDown } from "react-icons/fi";

import "./FilterDropdown.css";

function FilterDropdown({

  title,
  value,
  onChange,
  options,

}) {

  return (

    <select
      className="filter-dropdown"
      value={value}
      onChange={onChange}
    >

      {title !== "Sort By" && (

        <option value="All">

          All {title}

        </option>

      )}

      {options.map((option) => (

        <option
          key={option}
          value={option}
        >

          {option}

        </option>

      ))}

    </select>

  );

}

export default FilterDropdown;