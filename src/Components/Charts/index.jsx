import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function Charts({ dataChart }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataChart.map((item) => item.userId),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
