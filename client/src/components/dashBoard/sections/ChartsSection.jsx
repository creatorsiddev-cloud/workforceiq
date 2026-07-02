import ChartCard from "../components/ChartCard";

import EmployeeGrowthChart from "../components/EmployeeGrowthChart";
import DepartmentDistributionChart from "../components/DepartmentDistributionChart";

function ChartsSection() {
  return (
    <section className="charts-section">

      <ChartCard
        title="Employee Growth"
        subtitle="Last 6 Months"
      >
        <EmployeeGrowthChart />
      </ChartCard>

      <ChartCard
        title="Department Distribution"
        subtitle="Current Workforce"
      >
        <DepartmentDistributionChart />
      </ChartCard>

    </section>
  );
}

export default ChartsSection;