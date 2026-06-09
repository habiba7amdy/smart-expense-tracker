import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChart({ income, expense }) {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Income vs Expense",
        data: [income, expense],
        backgroundColor: ["#34d399", "#f87171"],
        borderColor: ["#0f172a", "#0f172a"],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e2e8f0",
          boxWidth: 12,
          padding: 16,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}