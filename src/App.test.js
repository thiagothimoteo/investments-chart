import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

describe('#App', () => {
  it('renders correctly', async () => {
    const { container, getByRole, getByText } = render(<App />);
    const select = container.querySelector('select')
    const description = getByRole('heading')
    const blankslate = getByText('Não há dados a serem mostrados')

    expect(select.value).toBe('all_time')
    expect(description).toBeInTheDocument()
    expect(blankslate).toBeInTheDocument()

    const chart = await waitForElement(() => container.querySelector('canvas'))

    expect(chart).toBeInTheDocument()
    expect(blankslate).not.toBeInTheDocument()
  })
})
