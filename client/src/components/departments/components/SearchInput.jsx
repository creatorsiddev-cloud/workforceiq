import { FiSearch } from "react-icons/fi";

import "./SearchInput.css";

function SearchInput({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="search-input">

      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search departments..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
}

export default SearchInput;