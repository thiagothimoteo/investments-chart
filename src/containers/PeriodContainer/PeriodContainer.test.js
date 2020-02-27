import React from 'react'
import { StateProvider } from '../../store'
import { render, fireEvent } from '@testing-library/react'
import PeriodContainer from './PeriodContainer'

describe('#PeriodContainer', () => {

  it('renders correctly', () => {
    const { container, getByText } = render(
      <StateProvider>
        <PeriodContainer />
      </StateProvider>
    )

    const select = container.querySelector('select')
    const periodLabel = getByText('Desde o Início')

    expect(select).toBeInTheDocument()
    expect(select.value).toBe('all_time')
    expect(periodLabel).toBeInTheDocument()
  })

  it('changes period', () => {
    const { container, getByText } = render(
      <StateProvider>
        <PeriodContainer />
      </StateProvider>
    )

    const select = container.querySelector('select')

    fireEvent.change(select, { target: { value: 'last_three_months' }})

    const newPeriodLabel = getByText('Últimos 3 meses')

    expect(select.value).toBe('last_three_months')
    expect(newPeriodLabel).toBeInTheDocument()
  })
})
