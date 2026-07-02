import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import { getDepartments } from "../../../services/departmentService";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DepartmentDistributionChart() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {

    loadChart();

  }, []);

  const loadChart = async () => {

    try {

      const departments = await getDepartments();

      setChartData({

        labels: departments.map(
          (department) => department.name
        ),

        datasets: [

          {

            label: "Employees",

            data: departments.map(
              (department) => department.employeeCount
            ),

            backgroundColor: [

              "#2563eb",
              "#22c55e",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6",
              "#06b6d4",
              "#ec4899",
              "#84cc16",

            ],

            borderWidth: 1,

          },

        ],

      });

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <Doughnut

      data={chartData}

      options={{

        responsive: true,

        plugins: {

          legend: {

            position: "bottom",

          },

        },

      }}

    />

  );

}

export default DepartmentDistributionChart;