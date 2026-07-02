import { useEffect, useState } from "react";

import WelcomeSection from "./sections/WelcomeSection";
import StatsSection from "./sections/StatsSection";
import ChartsSection from "./sections/ChartsSection";
import RecentEmployees from "./sections/RecentEmployees";
import RecentActivity from "./sections/RecentActivity";

import { getEmployees } from "../../services/employeeService";
import { getDepartments } from "../../services/departmentService";
import { getActivities } from "../../services/activityService";

import "../../styles/Dashboard.css";

function Dashboard() {

  // ==========================================
  // State
  // ==========================================

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [activities, setActivities] = useState([]);

  // ==========================================
  // Fetch Dashboard Data
  // ==========================================

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const [
        employeeData,
        departmentData,
        activityData,
      ] = await Promise.all([

        getEmployees(),
        getDepartments(),
        getActivities(),

      ]);

      setEmployees(employeeData);

      setDepartments(departmentData);

      setActivities(activityData);

    }

    catch (error) {

      console.error(error);

    }

  };

  return (

    <main className="dashboard">

      <WelcomeSection
    employees={employees}
    departments={departments}
/>

      <StatsSection
        employees={employees}
        departments={departments}
      />

      <ChartsSection
        employees={employees}
        departments={departments}
      />

      <div className="bottom-section">

        <RecentEmployees
          employees={employees}
        />

        <RecentActivity
          activities={activities}
        />

      </div>

    </main>

  );

}

export default Dashboard;