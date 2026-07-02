import { HiUsers, HiUserGroup } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { MdPersonOff } from "react-icons/md";

import StatCard from "../components/StatCard";
import "./StatsSection.css";

function StatsSection({

  employees,
  departments,

}) {

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(

    (employee) => employee.status === "Active"

  ).length;

  const inactiveEmployees = employees.filter(

    (employee) => employee.status === "Inactive"

  ).length;

  const totalDepartments = departments.length;

  return (

    <section className="stats-section">

      <StatCard
        title="Employees"
        value={totalEmployees}
        change="Total Workforce"
        icon={<HiUsers />}
      />

      <StatCard
        title="Active"
        value={activeEmployees}
        change="Currently Working"
        icon={<HiUserGroup />}
      />

      <StatCard
        title="Inactive"
        value={inactiveEmployees}
        change="Not Active"
        icon={<MdPersonOff />}
      />

      <StatCard
        title="Departments"
        value={totalDepartments}
        change="Organization Units"
        icon={<FaBuilding />}
      />

    </section>

  );

}

export default StatsSection;