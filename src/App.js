import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { PeriodDescription, PeriodSelect, Chart } from './components';
import { Provider } from './Context'
import moment from 'moment';

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`

const api = 'https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js'

const initialState = {
  period: 'all_time',
  chartData: [],
  filteredChartData: []
}

const reducer = (state, action) => {
  let filteredChartData = []

  switch(action.type) {
    case 'fetch_data':
      return { ...state, chartData: action.payload, filteredChartData: action.payload }
    case 'change_period':
      return { ...state, period: action.payload }
    case 'filter_by_last_month':
      const last_month = moment().subtract(1, 'month').month()
      filteredChartData = state.chartData.filter(
        item => moment(new Date(item[0])).month() === last_month
      )

      return { ...state, filteredChartData }
    case 'filter_by_last_three_months':
      const last_three_months = moment().subtract(3, 'months').startOf('month')
      filteredChartData = state.chartData.filter(
        item => moment(new Date(item[0])) > last_three_months &&
        moment(new Date(item[0])) <= moment()
      )

      return { ...state, filteredChartData: filteredChartData }
    case 'filter_by_last_year':
      const last_year = moment().subtract(1, 'year').year()
      filteredChartData = state.chartData.filter(item => moment(new Date(item[0])).year() === last_year)

      return { ...state, filteredChartData }
    case 'filter_by_last_two_years':
      const last_two_years = moment().subtract(2, 'years')
      filteredChartData = state.chartData.filter(item =>
        moment(new Date(item[0])).year() > last_two_years.year() &&
        moment(new Date(item[0])).year() < moment().year()
      )

      return { ...state, filteredChartData }
    case 'filter_by_all_time':
      return { ...state, filteredChartData: state.chartData }
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  useEffect(() => {
    const getChartData = async () => {
      const response = await fetch(api)
      const data = await response.json()

      dispatch({ type: 'fetch_data', payload: data })
    }

    getChartData()
  }, [])

  return (
    <Provider value={value}>
      <Container>
        <PeriodSelect />
        <PeriodDescription />
        <Chart data={state.filteredChartData} />
      </Container>
    </Provider>
  );
}

export default App;
