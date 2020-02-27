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
  color: #7171a6;
`

const Chart = ({ data, options, error, ...rest }) => {
  if (error) return <StyledBlankslate>Ocorreu um erro ao buscar os dados. Tente novamente.</StyledBlankslate>

  return Object.keys(data).length > 0
    ? <Line data={data} options={options} {...rest} />
    : <StyledBlankslate>Não há dados a serem mostrados nesse período.</StyledBlankslate>
}

Chart.defaultProps = {
  data: {},
  options: {}
}

export default Chart
