import React, { useContext, useEffect } from 'react';
import Context from '../../Context';
import moment from 'moment';

const PeriodSelect = ({ value, ...rest}) => {
  const { state, dispatch } = useContext(Context)
  const { period } = state

  const handleChange = event => {
    dispatch({ type: 'change_period', payload: event.target.value })
    filterByPeriod(period)
  }

  const filterByPeriod = (period) => {
    const { chartData } = state
    let filteredData = []

    switch(period) {
      case 'last_month':
        const last_month = moment().subtract(1, 'month').month()
        filteredData = chartData.filter(
          item => moment(new Date(item[0])).month() === last_month
        )

        dispatch({ type: 'filter_by_last_month', payload: filteredData })
        break;
      case 'last_three_months':
        const last_three_months = moment().subtract(3, 'months').startOf('month')
        filteredData = chartData.filter(
          item => moment(new Date(item[0])) > last_three_months && moment(new Date(item[0])) <= moment()
        )

        dispatch({ type: 'filter_by_last_three_months', payload: filteredData })
        break;
      default:
        dispatch({ type: 'filter_by_all_time' })
        break;
    }
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
