import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const dummyData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
  ],
};

const dummyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function LineChart(props) {
  const { data, options, ...rest } = props;

  return <Line data={data} options={options} {...rest} />;
}

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

LineChart.defaultProps = {
  data: dummyData,
  options: dummyOptions,
};

export default LineChart;
