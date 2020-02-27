import React from 'react'
import Chart from './Chart'
import { render } from '@testing-library/react'

describe('#Chart', () => {
  it('renders chart correctly', () => {
    const data = {
      labels: ['foo', 'bar', 'foo bar'],
      datasets: [{
        data: [1, 2, 3]
      }]
    }
    const { container } = render(<Chart data={data} />)

    const chart = container.querySelector('canvas')

    expect(chart).toBeInTheDocument()
  })

  it('renders chart blankslate correctly', () => {
    const { getByText } = render(<Chart />)
    const blankslate = getByText('Não há dados a serem mostrados nesse período.')

    expect(blankslate).toBeInTheDocument()
  })

  it('renders chart with error correctly', () => {
    const { getByText } = render(<Chart error={{ message: 'error' }} />)
    const blankslate = getByText('Ocorreu um erro ao buscar os dados. Tente novamente.')

    expect(blankslate).toBeInTheDocument()
  })
})
