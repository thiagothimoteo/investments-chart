import React from 'react'
import Description from './Description'
import { render } from '@testing-library/react'
import { icons } from '../../constants'

describe('#Description', () => {
  it('renders description without icon correctly', () => {
    const textContent = 'This is a description example'
    const { getByRole, container } = render(
      <Description role="heading">
        { textContent }
      </Description>
    )
    const icon = container.querySelector('img')

    expect(getByRole('heading')).toHaveTextContent(textContent)
    expect(icon).not.toBeInTheDocument()
  })

  it('renders description with icon correctly', () => {
    const textContent = 'This is a description example'
    const { container } = render(
      <Description icon={icons.calendar} role="heading">
        { textContent }
      </Description>
    )
    const icon = container.querySelector('img')

    expect(icon).toHaveAttribute('src', icons.calendar)
  })
})
