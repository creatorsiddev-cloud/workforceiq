import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { getEmployees } from "../../../services/employeeService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function EmployeeGrowthChart() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {

    loadChart();

  }, []);

  const loadChart = async () => {

    try {

      const employees = await getEmployees();

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const employeeCount = new Array(12).fill(0);

      employees.forEach((employee) => {

        const date = new Date(
          employee.joiningDate || employee.createdAt
        );

        employeeCount[date.getMonth()]++;

      });

      setChartData({

        labels: months,

        datasets: [

          {

            label: "Employees",

            data: employeeCount,

            borderColor: "#2563eb",

            backgroundColor: "#2563eb",

            tension: 0.4,

            fill: false,

          },

        ],

      });

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <Line

      data={chartData}

      options={{

        responsive: true,

        plugins: {

          legend: {

            display: false,

          },

        },

      }}

    />

  );

}

export default EmployeeGrowthChart;