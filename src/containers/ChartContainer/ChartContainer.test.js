import React from 'react'
import { StateProvider } from '../../store'
import { render, waitForElement } from '@testing-library/react'
import ChartContainer from './ChartContainer'
import { act } from 'react-dom/test-utils'

describe('#ChartContainer', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(
      [1565308800000, 24960],
      [1565568000000, 24960],
    ))

    let renderChartContainer = {}

    await act(async() => {
      renderChartContainer = render(
        <StateProvider>
          <ChartContainer />
        </StateProvider>
      )

      const { getByText } = renderChartContainer
      const blankslate = getByText('Não há dados a serem mostrados')

      expect(blankslate).toBeInTheDocument()
    })

    const { container } = renderChartContainer
    const chart = container.querySelector('canvas')

    expect(chart).toBeInTheDocument()
  })
})
