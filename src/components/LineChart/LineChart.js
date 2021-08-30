import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

import chartOptions from "./chartOptions";

function LineChart(props) {
  const { data, options, ...rest } = props;

  return <Line data={data} options={options} {...rest} />;
}

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

LineChart.defaultProps = {
  options: chartOptions,
};

export default LineChart;
