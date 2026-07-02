import {
  FiDownload,
  FiFilter,
  FiRefreshCw,
} from "react-icons/fi";


import SearchInput from "../components/SearchInput";
import FilterDropdown from "../components/FilterDropdown";
import ToolbarButton from "../components/ToolbarButton";

import "../styles/DepartmentToolbar.css";

function DepartmentToolbar({

  searchTerm,
  setSearchTerm,

  statusFilter,
  setStatusFilter,

  sortBy,
  setSortBy,

  statuses,
  sortOptions,

  fetchDepartments,

  departments,

}) {

    // ==========================================
// Export CSV
// ==========================================

const handleExport = () => {

  if (departments.length === 0) {

    alert("No departments available to export.");

    return;

  }

  const headers = [

    "Department",
    "Manager",
    "Employees",
    "Location",
    "Status",
    "Description",

  ];

  const rows = departments.map((department) => [

    department.name,
    department.manager,
    department.employeeCount,
    department.location,
    department.status,
    department.description,

  ]);

  const csvContent = [

    headers,
    ...rows,

  ]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "departments.csv";

  link.click();

  window.URL.revokeObjectURL(url);

};


  return (

    <section className="department-toolbar">

      <div className="toolbar-left">

        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
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

        <ToolbarButton
  icon={<FiDownload />}
  text="Export"
  onClick={handleExport}
/>

        <ToolbarButton
          icon={<FiFilter />}
          text="Filter"
          
        />

        <ToolbarButton
  icon={<FiRefreshCw />}
  text="Refresh"
  onClick={fetchDepartments}
/>

      </div>

    </section>

  );

}

export default DepartmentToolbar;