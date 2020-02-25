import moment from 'moment'

const initialState = {
  period: localStorage.getItem('period') || 'all_time',
  chartData: [],
  filteredChartData: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'fetch_data':
      return { ...state, chartData: action.payload, filteredChartData: action.payload }
    case 'change_period':
      return { ...state, period: action.payload }
    case 'filter_by_last_month':
      const lastMonthData = state.chartData.filter(filterByLastMonth)

      return { ...state, filteredChartData: lastMonthData }
    case 'filter_by_last_three_months':
      const lastThreeMonthsData = state.chartData.filter(filterByLastThreeMonths)

      return { ...state, filteredChartData: lastThreeMonthsData }
    case 'filter_by_last_year':
      const lastYearData = state.chartData.filter(filterByLastYear)

      return { ...state, filteredChartData: lastYearData }
    case 'filter_by_last_two_years':
      const lastTwoYearsData = state.chartData.filter(filterByLastTwoYears)

      return { ...state, filteredChartData: lastTwoYearsData }
    case 'filter_by_all_time':
      return { ...state, filteredChartData: state.chartData }
    default:
      throw new Error()
  }
}

const filterByLastMonth = item => {
  const date = new Date(item[0])
  const lastMonth = moment().subtract(1, 'month').month()
  const month = moment(date).month()

  return month === lastMonth
}

const filterByLastThreeMonths = item => {
  const date = new Date(item[0])
  const threeMonthsBack = moment().subtract(3, 'months').startOf('month')
  const momentDate = moment(date)
  const now = moment()

  return momentDate > threeMonthsBack && momentDate <= now
}

const filterByLastYear = item => {
  const date = new Date(item[0])
  const lastYear = moment().subtract(1, 'year').year()
  const year = moment(date).year()

  return year === lastYear
}

const filterByLastTwoYears = item => {
  const date = new Date(item[0])
  const twoYearsBack = moment().subtract(2, 'years')
  const year = moment(date).year()
  const currentYear = moment().year()

  return year > twoYearsBack.year() && year < currentYear
}

export { reducer, initialState }
