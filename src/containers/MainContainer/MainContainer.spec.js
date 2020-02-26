import React from 'react'
import { Provider } from '../../Context'
import { initialState } from '../../reducer'
import { render } from '@testing-library/react'
import MainContainer from './MainContainer'

const renderMainContainer = (value) => (
  render(
    <Provider value={value}>
      <MainContainer />
    </Provider>
  )
)

describe('#MainContainer', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  xit('...', () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 1 }))

    const dispatch = jest.fn()
    const { container } = renderMainContainer({ state: initialState, dispatch })

    const periodSelect = container.querySelector('select')

    expect(dispatch).toHaveBeenCalled()
  })
})
