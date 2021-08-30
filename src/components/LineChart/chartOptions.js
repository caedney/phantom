const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default chartOptions;
