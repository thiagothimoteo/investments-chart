import React, { useContext } from 'react';
import Context from '../../Context';

const PeriodSelect = (props) => {
  const { state, dispatch } = useContext(Context)
  const { period } = state

  const handleChange = event => {
    const selectedPeriod = event.target.value

    dispatch({ type: 'change_period', payload: selectedPeriod })
    localStorage.setItem('period', selectedPeriod)
    dispatch({ type: `filter_by_${selectedPeriod}`})
  }

  return (
    <select value={period} onChange={handleChange} {...props}>
      <option value="all_time">Desde o Início</option>
      <option value="last_month">Último mês</option>
      <option value="last_three_months">Últimos 3 meses</option>
      <option value="last_year">Último ano</option>
      <option value="last_two_years">Últimos 2 anos</option>
    </select>
  )
}

export default PeriodSelect;
