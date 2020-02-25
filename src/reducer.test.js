import { reducer } from './reducer'

describe('reducer', () => {
  it('fetchs data', () => {
    const initialState ={
      period: localStorage.getItem('period') || 'all_time',
      chartData: [],
      filteredChartData: []
    }
    const payload = ['foo', 'bar', 'foo bar']
    const action = { type: 'fetch_data', payload }

    const state = reducer(initialState, action)

    expect(state.chartData).toEqual(payload)
    expect(state.filteredChartData).toEqual(payload)
    expect(state.period).toBe('all_time')
  })

  it('changes period', () => {
    const initialState = { period: 'all_time' }
    const action = { type: 'change_period', payload: 'last_month' }

    const state = reducer(initialState, action)

    expect(state.period).toBe('last_month')
  })

  it('filters data by last month', () => {
    const initialState = {
      chartData: [
        [new Date('12-31-2019'), 3],
        [new Date('01-30-2020'), 1],
        [new Date('01-31-2020'), 2]
      ],
      filteredChartData: []
    }
    const action = { type: 'filter_by_last_month' }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('01-30-2020'), 1],
      [new Date('01-31-2020'), 2]
    ])
  })

  it('filters data by last three months', () => {
    const initialState = {
      chartData: [
        [new Date('10-29-2019'), 4],
        [new Date('11-29-2019'), 4],
        [new Date('12-31-2019'), 3],
        [new Date('01-30-2020'), 1],
        [new Date('02-28-2020'), 5]
      ],
      filteredChartData: []
    }
    const action = { type: 'filter_by_last_three_months' }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('11-29-2019'), 4],
      [new Date('12-31-2019'), 3],
      [new Date('01-30-2020'), 1],
    ])
  })

  it('filters data by last year', () => {
    const initialState = {
      chartData: [
        [new Date('10-29-2019'), 4],
        [new Date('11-29-2019'), 4],
        [new Date('01-29-2020'), 3],
      ],
      filteredChartData: []
    }
    const action = { type: 'filter_by_last_year' }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('10-29-2019'), 4],
      [new Date('11-29-2019'), 4],
    ])
  })

  it('filters data by last two years', () => {
    const initialState = {
      chartData: [
        [new Date('11-29-2017'), 4],
        [new Date('10-29-2018'), 4],
        [new Date('11-29-2019'), 4],
        [new Date('01-29-2020'), 3],
      ],
      filteredChartData: []
    }
    const action = { type: 'filter_by_last_two_years' }

    const state = reducer(initialState, action)

    expect(state.filteredChartData).toEqual([
      [new Date('10-29-2018'), 4],
      [new Date('11-29-2019'), 4],
    ])
  })
})
