import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "./chart.css";

Chart.register(
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
);

const addChartSkeleton = function () {
  document.querySelector(".chart-container")?.remove();
  const html = `<section class="chart-container">
                  <div class="chart">
                    <canvas id="lineChart"></canvas>
                  </div>
                </section>`;
  document.querySelector("body").insertAdjacentHTML("beforeend", html);
};

const addChartHeader = function () {
  const chartContainer = document.querySelector(".chart-container");
  const html = `<h2 class="chart-header">Temprature Progression over the week :</h2>`;
  chartContainer?.insertAdjacentHTML("afterbegin", html);
};

const getLabel = (unit) => (unit === "c" ? "Celsius" : "Fahrenheit");

const addChart = function (dates, temps, unit) {
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: `Temprature in ${getLabel(unit)}`,
          data: temps,
          borderColor: "#fff",
          backgroundColor: "rgba(74, 144, 226, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: "#4A90E2",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#333",
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          titleColor: "#000",
          bodyColor: "#000",
          backgroundColor: "#fff",
          borderColor: "#ddd",
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#989ba3",
          },
        },
        y: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#989ba3",
          },
        },
      },
    },
  });
};

export default function (dates, temps, unit) {
  addChartSkeleton();
  addChartHeader();
  addChart(dates, temps, unit);
}
