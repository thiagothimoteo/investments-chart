import React, { useState } from 'react';

const PeriodSelect = ({ value, ...rest}) => {
  const [selectValue, setSelectValue] = useState(value)

  const handleChange = event => {
    setSelectValue(event.target.value)
  }

  return (
    <select value={selectValue} onChange={handleChange} {...rest}>
      <option value="all_time">Desde o Início</option>
      <option value="last_month">Último mês</option>
      <option value="last_three_months">Últimos 3 meses</option>
      <option value="last_year">Último ano</option>
      <option value="last_two_years">Últimos 2 anos</option>
    </select>
  )
}

PeriodSelect.defaultProps = {
  value: 'all_time'
}

export default PeriodSelect;
