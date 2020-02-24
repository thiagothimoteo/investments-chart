import React from 'react';
import { Line } from "react-chartjs-2";

const Chart = ({ data, options, ...rest }) => {
  return <Line data={data} options={options} {...rest} />
}

export default Chart
