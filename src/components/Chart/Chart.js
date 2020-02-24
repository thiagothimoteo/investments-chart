import React, { useState, useEffect, useContext } from 'react'
import { Line } from "react-chartjs-2"
import defaultOptions from './defaultOptions'
import Context from '../../Context'

const Chart = ({ customOptions, ...rest }) => {
  const options = { ...defaultOptions, ...customOptions }
  const { state } = useContext(Context)
  const { filteredChartData } = state
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
    const data = formatData(filteredChartData)
    const labels = formatLabel(filteredChartData)

    setChartData({ labels, datasets: [{ data }] })
  }, [filteredChartData])

  return <Line data={chartData} options={options} {...rest} />
}

export default Chart
