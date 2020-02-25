import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Description, Select, Chart } from '../../components';
import Context from '../../Context';
import { periods, icons } from '../../constants'

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
  const { state, dispatch } = useContext(Context)
  const { period, filteredChartData } = state
  const selectOptions = setSelectOptions()

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

  return (
    <StackContainer>
      <header>
        <Select value={period} options={selectOptions} onChange={handlePeriodChange} />
      </header>
      <main>
        <Description role="heading" icon={icons.calendar}>
          Você está vendo o período <strong>{ periods[period] }</strong>
        </Description>
        <Chart data={filteredChartData} />
      </main>
    </StackContainer>
  )
}

export default MainContainer
