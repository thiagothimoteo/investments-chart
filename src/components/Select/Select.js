import React from 'react';
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: .5rem 2rem .5rem .5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`

const Select = ({ value, options, onChange, ...rest }) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <StyledSelect value={value} onChange={handleChange} {...rest}>
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))
      }
    </StyledSelect>
  )
}

export default Select;
