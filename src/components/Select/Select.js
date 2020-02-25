import React from 'react';

const Select = ({ value, options, onChange, ...rest }) => {
  const handleChange = event => {
    onChange(event.target.value)
  }

  return (
    <select value={value} onChange={handleChange} {...rest}>
      {
        options.map((option, index) => (
          <option key={index} value={option.value}>{option.text}</option>
        ))
      }
    </select>
  )
}

export default Select;
