import { FiDownload, FiRefreshCw } from "react-icons/fi";

import "./ActivityToolbar.css";

function ActivityToolbar({
  searchTerm,
  setSearchTerm,

  moduleFilter,
  setModuleFilter,

  actionFilter,
  setActionFilter,

  sortBy,
  setSortBy,

  handleRefresh,
  handleExport,
}) {
  return (
    <section className="activity-toolbar">

      <div className="toolbar-left">

        <input
          type="text"
          placeholder="Search activities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="activity-search"
        />

        <select
          value={moduleFilter}
          onChange={(e) => setModuleFilter(e.target.value)}
          className="activity-select"
        >
          <option value="All">All Modules</option>
          <option value="Employee">Employee</option>
          <option value="Department">Department</option>
        </select>

        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="activity-select"
        >
          <option value="All">All Actions</option>
          <option value="Added">Added</option>
          <option value="Updated">Updated</option>
          <option value="Deleted">Deleted</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="activity-select"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>

      </div>

      <div className="toolbar-right">

        <button
          className="toolbar-btn"
          onClick={handleRefresh}
        >
          <FiRefreshCw />
          Refresh
        </button>

        <button
          className="toolbar-btn"
          onClick={handleExport}
        >
          <FiDownload />
          Export
        </button>

      </div>

    </section>
  );
}

export default ActivityToolbar;