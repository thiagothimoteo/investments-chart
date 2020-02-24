import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { PeriodDescription, PeriodSelect, Chart } from './components';
import { Provider } from './Context'
import { reducer, initialState } from './reducer'

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`

const api = 'https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  useEffect(() => {
    const getChartData = async () => {
      const response = await fetch(api)
      const data = await response.json()

      dispatch({ type: 'fetch_data', payload: data })
      dispatch({ type: `filter_by_${state.period}` })
    }

    getChartData()
  }, [state.period])

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
