import React from 'react'
import { StateProvider } from '../../store'
import { render, fireEvent } from '@testing-library/react'
import MainContainer from './MainContainer'

const renderMainContainer = () => (
  render(
    <StateProvider>
      <MainContainer />
    </StateProvider>
  )
)

describe('#MainContainer', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('...', () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 1 }))

    const { container } = renderMainContainer()

    const periodSelect = container.querySelector('select')

    fireEvent.change(periodSelect, { target: { value: 'last_month' } })

    expect(periodSelect).toBeInTheDocument()
    expect(periodSelect.value).toBe('last_month')
  })
})
