import { FiDownload, FiFilter, FiRefreshCw } from "react-icons/fi";

import SearchInput from "../components/SearchInput";
import FilterDropdown from "../components/FilterDropdown";
import ToolbarButton from "../components/ToolbarButton";

import "../styles/EmployeeToolbar.css";

function EmployeeToolbar({
  searchTerm,
  setSearchTerm,

  departmentFilter,
  setDepartmentFilter,
  departments,

  statusFilter,
  setStatusFilter,
  statuses,

  sortBy,
  setSortBy,
  sortOptions,
}) {
  return (
    <section className="employee-toolbar">
      <div className="toolbar-left">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterDropdown
          title="Department"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          options={departments}
        />

        <FilterDropdown
          title="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={statuses}
        />

        <FilterDropdown
          title="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={sortOptions}
        />
      </div>

      <div className="toolbar-right">
        <ToolbarButton icon={<FiDownload />} text="Export" />

        <ToolbarButton icon={<FiFilter />} text="Filter" />

        <ToolbarButton icon={<FiRefreshCw />} text="Refresh" />
      </div>
    </section>
  );
}

export default EmployeeToolbar;
