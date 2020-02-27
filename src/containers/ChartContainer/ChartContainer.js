import React, { useEffect, useContext, useState } from 'react'
import { Chart } from '../../components'
import store from '../../store'
import chartCustomOptions from '../../components/Chart/customOptions'

const apiURL = process.env.REACT_APP_INVESTMENTS_API_URL

const ChartContainer = () => {
  const [chartData, setChartData] = useState({})
  const { state, dispatch } = useContext(store)
  const { period, filteredChartData } = state

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
    const getChartData = async () => {
      const response = await fetch(apiURL)
      const data = await response.json()

      dispatch({ type: 'fetch_data', payload: data })
      dispatch({ type: `filter_by_${period}` })
    }

    getChartData()
  }, [period, dispatch])

  useEffect(() => {
    if (filteredChartData.length > 0) {
      const items = formatData(filteredChartData)
      const labels = formatLabel(filteredChartData)
      const backgroundColor = 'rgba(150, 150, 215, 0.75)'

      setChartData({ labels, datasets: [{ data: items, backgroundColor }] })
    }
  }, [filteredChartData])

  return (
    <main>
      <Chart data={chartData} options={chartCustomOptions} />
    </main>
  )
}

export default ChartContainer
