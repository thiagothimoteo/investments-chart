import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import defaultOptions from './defaultOptions';

const Chart = ({ data, customOptions, ...rest }) => {
  const options = { ...defaultOptions, ...customOptions }
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  })

  const formatData = data => {
    return data.map(item => ({
      t: new Date(item[0]),
      y: item[1]
    }))
  }

  const formatLabel = data => {
    return data.map(item => new Date(item[0]))
  }

  useEffect(() => {
    const formattedData = formatData(data)
    const formattedLabel = formatLabel(data)

    setChartData({
      labels: formattedLabel,
      datasets: [{ data: formattedData }]
    })
  }, [data])

  return <Line data={chartData} options={options} {...rest} />
}

export default Chart
