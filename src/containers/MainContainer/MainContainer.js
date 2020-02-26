import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { Description, Select, Chart } from '../../components';
import Context from '../../Context';
import { periods, icons } from '../../constants'
import chartCustomOptions from '../../components/Chart/customOptions'

const apiURL = process.env.REACT_APP_INVESTMENTS_API_URL

const StackContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;

  > header {
    display: flex;
    justify-content: flex-end;
  }
`

const setSelectOptions = () => {
  return Object.keys(periods).map(value => ({
      value,
      text: periods[value]
    })
  )
}

const MainContainer = () => {
  const selectOptions = setSelectOptions()
  const [chartData, setChartData] = useState({})
  const { state, dispatch } = useContext(Context)
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

  const handlePeriodChange = selectedPeriod => {
    localStorage.setItem('period', selectedPeriod)
    dispatch({ type: 'change_period', payload: selectedPeriod })
    dispatch({ type: `filter_by_${selectedPeriod}`})
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
      const backgroundColor = 'rgba(52, 152, 219, 0.75)'

      setChartData({ labels, datasets: [{ data: items, backgroundColor }] })
    }
  }, [filteredChartData])

  return (
    <StackContainer>
      <header>
        <Select value={period} options={selectOptions} onChange={handlePeriodChange} />
      </header>
      <main>
        <Description role="heading" icon={icons.calendar}>
          Você está vendo o período <strong>{ periods[period] }</strong>
        </Description>
        <Chart data={chartData} options={chartCustomOptions} />
      </main>
    </StackContainer>
  )
}

export default MainContainer
