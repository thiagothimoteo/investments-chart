import React, { useState } from 'react'
import styled from 'styled-components'
import { icons } from '../../constants'

const StyledSelectContainer = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 0 1px #e6e6ff;
  border-radius: 3px;
  color: #7171a6;

  > select {
    appearance: none;
    display: block;
    color: currentColor;
    padding: .5rem 2rem;
    background-color: transparent;
    border: 0;
  }

  &:before,
  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    display: block;
    top: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:before {
    left: 0;
    background-image: url(${icons.calendar});
    transform: translate(50%, -50%);
    opacity: .65;
  }

  &:after {
    width: .875rem;
    height: .875rem;
    right: 0;
    background-image: url(${icons.angle_down});
    transform: translate(-50%, -50%);
    opacity: .55;
  }
`

const Select = ({ value, options, onChange, ...rest }) => {
  const [selectedValue, setValue] = useState(value)
  const handleChange = event => {
    const selectedOption = event.target.value

    setValue(selectedOption)
    if (onChange) {
      onChange(selectedOption)
    }
  }

  return (
    <StyledSelectContainer>
      <select value={selectedValue} onChange={handleChange} {...rest}>
        {
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))
        }
      </select>
    </StyledSelectContainer>
  )
}

export default Select;
