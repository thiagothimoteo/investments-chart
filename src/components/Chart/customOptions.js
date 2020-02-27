import { numberToCurrency } from '../../helpers'

export default {
  legend: false,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => numberToCurrency(tooltipItem.yLabel)
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        tickMarkLength: 15
      },
      scaleLabel: {
        display: true,
      },
      type: 'time',
      distribution: 'series',
      time: {
        tooltipFormat: 'DD MMM YY',
        unit: 'day',
        displayFormats: {
          day: 'DD MMM YY',
        }
      },
      ticks: {
        source: 'data',
        autoSkip: true,
        autoSkipPadding: 20,
        maxRotation: 0,
        fontColor: '#888',
      }
    }],
    yAxes: [{
      position: 'right',
      ticks: {
        callback: (value) => numberToCurrency(value),
        fontColor: '#888'
      }
    }]
  }
}
