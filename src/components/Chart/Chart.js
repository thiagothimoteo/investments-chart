import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

const StyledBlankslate = styled.div`
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem;
  background-color: #f5f5f5;
`

const Chart = ({ data, options, ...rest }) => {
  return Object.keys(data).length > 0
    ? <Line data={data} options={options} {...rest} />
    : <StyledBlankslate>Não há dados a serem mostrados</StyledBlankslate>
}

Chart.defaultProps = {
  data: {},
  options: {}
}

export default Chart
