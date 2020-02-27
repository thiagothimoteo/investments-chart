import React from 'react'
import { render } from '@testing-library/react'
import { StateProvider } from './store'
import App from './App'
import { act } from 'react-dom/test-utils'

describe('#App', () => {
  it('renders correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify({ foo: 'bar' }))

    let renderApp = {}

    await act(async() => {
      renderApp = render(
        <StateProvider>
          <App />
        </StateProvider>
      )
    })

    const { container, getByRole, getByText } = renderApp
    const select = container.querySelector('select')
    const description = getByRole('heading')
    const blankslate = getByText('Não há dados a serem mostrados nesse período.')

    expect(select.value).toBe('all_time')
    expect(description).toBeInTheDocument()
    expect(blankslate).toBeInTheDocument()
  })
})
