import moment from 'moment'

const initialState = {
  period: 'all_time',
  chartData: [],
  filteredChartData: []
}

const reducer = (state, action) => {
  let filteredChartData = []

  switch(action.type) {
    case 'fetch_data':
      return { ...state, chartData: action.payload, filteredChartData: action.payload }
    case 'change_period':
      return { ...state, period: action.payload }
    case 'filter_by_last_month':
      const last_month = moment().subtract(1, 'month').month()
      filteredChartData = state.chartData.filter(
        item => moment(new Date(item[0])).month() === last_month
      )

      return { ...state, filteredChartData }
    case 'filter_by_last_three_months':
      const last_three_months = moment().subtract(3, 'months').startOf('month')
      filteredChartData = state.chartData.filter(
        item => moment(new Date(item[0])) > last_three_months &&
        moment(new Date(item[0])) <= moment()
      )

      return { ...state, filteredChartData: filteredChartData }
    case 'filter_by_last_year':
      const last_year = moment().subtract(1, 'year').year()
      filteredChartData = state.chartData.filter(item => moment(new Date(item[0])).year() === last_year)

      return { ...state, filteredChartData }
    case 'filter_by_last_two_years':
      const last_two_years = moment().subtract(2, 'years')
      filteredChartData = state.chartData.filter(item =>
        moment(new Date(item[0])).year() > last_two_years.year() &&
        moment(new Date(item[0])).year() < moment().year()
      )

      return { ...state, filteredChartData }
    case 'filter_by_all_time':
      return { ...state, filteredChartData: state.chartData }
    default:
      throw new Error()
  }
}

export { reducer, initialState }
