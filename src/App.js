import React from 'react'
import { ChartContainer, PeriodContainer } from './containers'
import styled from 'styled-components'

const StackContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
`

const App = () => {
  return (
    <StackContainer>
      <PeriodContainer />
      <ChartContainer />
    </StackContainer>
  )
}

export default App;
