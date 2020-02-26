import React from 'react'
import { StateProvider } from '../../store'
import { render, fireEvent } from '@testing-library/react'
import PeriodContainer from './PeriodContainer'

describe('#PeriodContainer', () => {

  it('...', () => {
    const { container, getAllByText } = render(
      <StateProvider>
        <PeriodContainer />
      </StateProvider>
    )

    const select = container.querySelector('select')
    const periodLabels = getAllByText('Desde o Início')

    expect(select).toBeInTheDocument()
    expect(select.value).toBe('all_time')
    expect(periodLabels.length).toBe(2)

    fireEvent.change(select, { target: { value: 'last_three_months' }})

    const newPeriodLabels = getAllByText('Últimos 3 meses')

    expect(select.value).toBe('last_three_months')
    expect(newPeriodLabels.length).toBe(2)
  })
})
