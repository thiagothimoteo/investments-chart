import React from 'react'
import Select from './Select'
import { render, fireEvent } from '@testing-library/react'

describe('#Select', () => {
  it('renders select correctly', () => {
    const options = [
      {
        value: 'foo',
        text: 'Foo'
      },
      {
        value: 'bar',
        text: 'Bar'
      },
      {
        value: 'foo_bar',
        text: 'Foo Bar'
      }
    ]

    const { container } = render(
      <Select options={options} />
    )

    const select = container.querySelector('select')

    expect(select.value).toBe('foo')

    fireEvent.change(select, { target: { value: 'bar' }})

    expect(select.value).toBe('bar')
  })

  it('calls "handleChange" with selected value', () => {
    const options = [
      {
        value: 'foo',
        text: 'Foo'
      },
      {
        value: 'bar',
        text: 'Bar'
      },
      {
        value: 'foo_bar',
        text: 'Foo Bar'
      }
    ]

    const handleChange = jest.fn()

    const { container } = render(
      <Select value="foo_bar" options={options} onChange={handleChange} />
    )

    const select = container.querySelector('select')

    expect(select.value).toBe('foo_bar')

    fireEvent.change(select, { target: { value: 'bar' }})

    expect(handleChange).toHaveBeenCalledWith('bar')
    expect(select.value).toBe('bar')
  })
})
