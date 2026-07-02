import {
  HiUsers,
  HiCheckCircle,
  HiClock,
  HiXCircle,
} from "react-icons/hi";

import SummaryCard from "../components/SummaryCard";
import "../styles/EmployeeSummary.css";

function EmployeeSummary() {
  return (
    <section className="employee-summary">

      <SummaryCard
        title="Total Employees"
        value="248"
        change="+12 this month"
        icon={<HiUsers />}
      />

      <SummaryCard
        title="Active"
        value="231"
        change="93% Workforce"
        icon={<HiCheckCircle />}
      />

      <SummaryCard
        title="On Leave"
        value="12"
        change="Current"
        icon={<HiClock />}
      />

      <SummaryCard
        title="Inactive"
        value="5"
        change="Needs Review"
        icon={<HiXCircle />}
      />

    </section>
  );
}

export default EmployeeSummary;