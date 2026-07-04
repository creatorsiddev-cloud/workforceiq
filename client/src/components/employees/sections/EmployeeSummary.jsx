import { useEffect, useState } from "react";
import {
  HiUsers,
  HiCheckCircle,
  HiClock,
  HiXCircle,
} from "react-icons/hi";

import SummaryCard from "../components/SummaryCard";
import { getEmployees } from "../../../services/employeeService";

import "../styles/EmployeeSummary.css";

function EmployeeSummary() {

  const [summary, setSummary] = useState({
    total: 0,
    active: 0,
    onLeave: 0,
    inactive: 0,
  });

  useEffect(() => {

    fetchSummary();

  }, []);

  const fetchSummary = async () => {

    try {

      const employees = await getEmployees();

      const total = employees.length;

      const active = employees.filter(
        (emp) => emp.status === "Active"
      ).length;

      const onLeave = employees.filter(
        (emp) => emp.status === "On Leave"
      ).length;

      const inactive = employees.filter(
        (emp) => emp.status === "Inactive"
      ).length;

      setSummary({
        total,
        active,
        onLeave,
        inactive,
      });

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <section className="employee-summary">

      <SummaryCard
        title="Total Employees"
        value={summary.total}
        change={`${summary.total} Employees`}
        icon={<HiUsers />}
      />

      <SummaryCard
        title="Active"
        value={summary.active}
        change={`${summary.total ? Math.round((summary.active / summary.total) * 100) : 0}% Workforce`}
        icon={<HiCheckCircle />}
      />

      <SummaryCard
        title="On Leave"
        value={summary.onLeave}
        change="Currently on Leave"
        icon={<HiClock />}
      />

      <SummaryCard
        title="Inactive"
        value={summary.inactive}
        change="Inactive Employees"
        icon={<HiXCircle />}
      />

    </section>

  );

}

export default EmployeeSummary;