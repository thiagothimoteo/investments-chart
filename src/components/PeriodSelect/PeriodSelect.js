import React, { useContext, useEffect } from 'react';
import Context from '../../Context';

const PeriodSelect = ({ value, ...rest}) => {
  const { state, dispatch } = useContext(Context)
  const { period } = state

  const handleChange = event => {
    dispatch({ type: 'change_period', payload: event.target.value })
    filterByPeriod(period)
  }

  const filterByPeriod = (period) => {
    dispatch({ type: `filter_by_${period}`})
  }

  useEffect(() => {
    filterByPeriod(period)
  }, [period])

  return (
    <select value={period} onChange={handleChange} {...rest}>
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
